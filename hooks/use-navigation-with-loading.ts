'use client';

import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/navigation-context';

export function useNavigationWithLoading() {
  const router = useRouter();
  const { setIsLoading } = useNavigation();

  const navigateWithLoading = (href: string) => {
    setIsLoading(true);
    router.push(href);
  };

  return { navigateWithLoading };
} 