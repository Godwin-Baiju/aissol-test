# Aissol - Fire Safety Equipment Website

This is a Next.js website for Aissol, a company specializing in fire safety and protection equipment.

## Contentful Integration

The website uses Contentful as a headless CMS to manage product data. The integration includes:

- Fetching products from Contentful API
- Displaying products on the products page
- Showing detailed product information on individual product pages

### Contentful Setup

1. Create a `.env.local` file in the root directory with the following variables:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

2. The Contentful content model should include a "Product" content type with the following fields:

- `productId` (Text) - Unique identifier for the product
- `title` (Text) - Product name
- `categoryId` (Text) - Category identifier
- `categoryName` (Text) - Category name
- `description` (Text) - Short product description
- `features` (Array of Text) - Product features
- `images` (Array of Media) - Product images

### API Endpoints

The Contentful API is accessed through the following URL:

```
https://cdn.contentful.com/spaces/{space_id}/environments/master/entries?access_token={access_token}&content_type=product
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The website can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
