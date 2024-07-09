// components/RefreshLink.tsx
import React, { ReactNode } from 'react';

interface RefreshLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const RefreshLink: React.FC<RefreshLinkProps> = ({ href, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default RefreshLink;
