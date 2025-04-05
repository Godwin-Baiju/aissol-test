'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/">
        <Button variant="default" className="flex items-center gap-2">
          <Home className="w-4 h-4" />
          Return Home
        </Button>
      </Link>
    </div>
  );
} 