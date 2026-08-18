import React from 'react';

const SRC = {
  colour: 'lockup',
  white: 'lockup-white',
};

/** Brand lockup or mark. Never redraw the logo — always render these files. */
export function Logo({ variant = 'lockup', tone = 'colour', height = 36, basePath = 'assets', style, ...rest }) {
  const file = variant === 'mark' ? 'logo-mark.png' : (tone === 'white' ? 'logo-lockup-white.png' : 'logo-lockup.png');
  return (
    <img
      src={`${basePath}/${file}`}
      alt="hsmanager"
      style={{ height, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
