export const screenWidth = 256;
export const screenHeight = 256;
export const maxPixelColor = 255;
export const ppmHeader = `P3
${screenWidth} ${screenHeight}
${maxPixelColor}`;

export type Pixel = {
  r: number;
  g: number;
  b: number;
};