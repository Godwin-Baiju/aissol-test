import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    console.log('Download API route called');
    const filePath = path.join(process.cwd(), 'public', 'Broucher-Al-Shaikh-International-Group.pdf');
    console.log('File path:', filePath);
    
    if (!fs.existsSync(filePath)) {
      console.log('File not found at path:', filePath);
      return new NextResponse('File not found', { status: 404 });
    }
    
    console.log('File exists, reading file...');
    const fileBuffer = fs.readFileSync(filePath);
    console.log('File read successfully, size:', fileBuffer.length);
    
    const response = new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Broucher-Al-Shaikh-International-Group.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });
    
    console.log('Response created with headers:', response.headers);
    return response;
  } catch (error) {
    console.error('Error in download route:', error);
    return new NextResponse('Error downloading file', { status: 500 });
  }
} 