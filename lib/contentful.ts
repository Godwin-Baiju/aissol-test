import { createClient } from 'contentful';

// Define types for Contentful data
export interface ContentfulProduct {
  sys: {
    id: string;
  };
  fields: {
    productId?: string;
    title: string;
    categoryId: string;
    categoryName?: string;
    description: string;
    fullDescription?: string | {
      nodeType: string;
      content: Array<{
        nodeType: string;
        content: Array<{
          nodeType: string;
          value: string;
          marks: any[];
        }>;
      }>;
    };
    features: string[];
    specifications?: string[];
    images: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    }[];
  };
}

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulResponse {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: ContentfulProduct[];
  includes: {
    Asset: ContentfulAsset[];
  };
}

// Create Contentful client
// Use NEXT_PUBLIC_ prefix for client-side access
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN || '';

// Check if we have the required credentials
if (!spaceId || !accessToken) {
  console.warn('Contentful credentials are missing. Please check your environment variables.');
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Function to fetch all products
export async function fetchProducts(): Promise<ContentfulResponse> {
  try {
    console.log("Contentful client config:", { 
      spaceId: spaceId ? "Set" : "Missing", 
      accessToken: accessToken ? "Set" : "Missing" 
    });
    
    const response = await client.getEntries({
      content_type: 'product',
    });
    
    console.log("Contentful response:", { 
      total: response.total, 
      items: response.items.length,
      hasAssets: !!response.includes?.Asset
    });
    
    return response as unknown as ContentfulResponse;
  } catch (error) {
    console.error('Error fetching products from Contentful:', error);
    throw error;
  }
}

// Function to fetch a single product by ID
export async function fetchProductById(productId: string): Promise<ContentfulProduct | null> {
  try {
    const response = await client.getEntries({
      content_type: 'product',
      'fields.productId': productId,
      limit: 1,
    });
    
    if (response.items.length === 0) {
      return null;
    }
    
    return response.items[0] as unknown as ContentfulProduct;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId} from Contentful:`, error);
    throw error;
  }
}

// Function to get image URL from asset ID
export function getImageUrl(assetId: string, assets: ContentfulAsset[]): string {
  const asset = assets.find(a => a.sys.id === assetId);
  if (!asset) {
    return '/images/placeholder.jpg'; // Fallback image
  }
  
  return `https:${asset.fields.file.url}`;
} 