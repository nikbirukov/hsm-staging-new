import React from 'react';

/** Material Symbols Rounded glyph. Icon set substitution — see readme ICONOGRAPHY. */
export function Icon({ name, size = 20, weight = 400, fill = 0, color = 'currentColor', style, ...rest }) {
  return (
    <span
      className="material-symbols-rounded"
      aria-hidden="true"
      style={{
        fontSize: size,
        width: size,
        height: size,
        color,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
      {...rest}
    >
      {name}
    </span>
  );
}
