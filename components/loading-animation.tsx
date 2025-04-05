import React from 'react';

interface LoadingAnimationProps {
  fullScreen?: boolean;
}

export default function LoadingAnimation({ fullScreen = false }: LoadingAnimationProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-pulse rounded-full bg-primary/20"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-6 w-6 animate-pulse rounded-full bg-primary/20"></div>
      </div>
    </div>
  );
} 