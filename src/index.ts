import fs from 'fs';
import { Pixel, screenHeight, screenWidth } from './settings';
import { createGradiant } from './gradiant';
import { createPpmFile } from './ppmUtils';

// init data structurs
let pixels: Pixel[][] = new Array(screenHeight).fill(undefined).map(() =>
  new Array(screenWidth).fill(undefined).map(() => {
    return { r: 255, g: 255, b: 255 };
  }),
);

// modifie pixels

// creating ppm file
fs.writeFileSync('.out/image.ppm', createPpmFile(pixels));
console.log('finished');
