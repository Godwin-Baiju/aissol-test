'use client';

import Link from "next/link";
import { useNavigationWithLoading } from '@/hooks/use-navigation-with-loading';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavigationLink({ href, children, className }: NavigationLinkProps) {
  const { navigateWithLoading } = useNavigationWithLoading();
  
  return (
    <Link 
      href={href} 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigateWithLoading(href);
      }}
    >
      {children}
    </Link>
  );
} 