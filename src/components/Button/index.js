import React from 'react';
import './index.scss';

function Button({ color, children, href, width, ...props }) {
  const Tag = href ? 'a' : 'button';
  return (
    <>
      <Tag href={href} className={`button  ${color} ${width}`} {...props}>
        {children}
      </Tag>
    </>
  );
}

export default Button;
