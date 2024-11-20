import { Pixel, ppmHeader } from './settings';

export function createPpmFile(pixels: Pixel[][]): string {
  let result = ppmHeader + '\n';

  for (let j = 0; j < pixels.length; j++) {
    const pixelColum = pixels[j];
    for (let i = 0; i < pixelColum.length; i++) {
      result += pixelToString(pixelColum[i]) + ' ';
    }
    result += '\n';
  }

  return result;
}

export function pixelToString(pixel: Pixel) {
  return `${pixel.r} ${pixel.g} ${pixel.b}`;
}
