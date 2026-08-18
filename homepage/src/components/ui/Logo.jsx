import React from 'react';

/** Brand lockup or mark. Never redraw the logo — always render these files. */
export function Logo({ variant = 'lockup', tone = 'colour', height = 36, basePath, style, ...rest }) {
  const file = variant === 'mark' ? 'logo-mark.png' : (tone === 'white' ? 'logo-lockup-white.png' : 'logo-lockup.png');
  // Defaults to Vite's base so the logo resolves under a sub-path deploy too.
  const root = (basePath ?? import.meta.env.BASE_URL).replace(/\/+$/, '');
  return (
    <img
      src={`${root}/${file}`}
      alt="hsmanager"
      style={{ height, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
