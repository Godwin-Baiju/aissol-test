'use client';

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingAnimation from '@/components/loading-animation';

type NavigationContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

// Create a separate component for the navigation content
function NavigationContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  return (
    <NavigationContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingAnimation fullScreen />}
      {children}
    </NavigationContext.Provider>
  );
}

// Main provider component with Suspense boundary
export function NavigationProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingAnimation fullScreen />}>
      <NavigationContent>{children}</NavigationContent>
    </Suspense>
  );
} 