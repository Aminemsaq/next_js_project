// components/RefreshLink.js
import React from 'react';

const RefreshLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default RefreshLink;
