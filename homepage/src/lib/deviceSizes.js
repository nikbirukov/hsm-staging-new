/**
 * Natural outer dimensions of the drawn device frames.
 *
 * These mirror the maths inside PhoneFrame / LaptopFrame, and exist so callers
 * can reserve the correct layout box when scaling a device with a transform.
 * Kept out of DeviceFrames.jsx so that file only exports components (fast refresh).
 */
export const phoneHeight = (width) => Math.round(width * 2.05);

export const laptopHeight = (width) =>
  Math.round(width * 0.6) + 2 * Math.round(width * 0.018) + Math.round(width * 0.02);
