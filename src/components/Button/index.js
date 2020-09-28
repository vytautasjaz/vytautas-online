import React from 'react';
import './index.scss';

function Button({ color, children, width, href }) {
  return (
    <>
      <a href={href} className={`button  ${color} ${width}`}>
        {children}
      </a>
    </>
  );
}

export default Button;
