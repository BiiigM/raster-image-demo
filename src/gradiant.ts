import { maxPixelColor, screenHeight, screenWidth } from './settings';
import { Color } from './index';

export function createGradiant(pixels: Color[][]) {
  for (let j = 0; j < pixels.length; j++) {
    let pixelColum = pixels[j];
    for (let i = 0; i < pixelColum.length; i++) {
      const r = i / (screenWidth - 1);
      const g = j / (screenHeight - 1);
      const b = 0;

      pixelColum[i].r = Math.floor(maxPixelColor * r);
      pixelColum[i].g = Math.floor(maxPixelColor * g);
      pixelColum[i].b = Math.floor(maxPixelColor * b);
    }
  }
}
