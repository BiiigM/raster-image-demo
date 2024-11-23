import fs from 'fs';
import { screenHeight, screenWidth } from './settings';
import { createGradiant } from './gradiant';
import { createPpmFile } from './ppmUtils';
import {
  drawLine,
  drawLineBresenham,
  drawLineBresenhamDirction,
  drawLineDirection,
} from './drawLineUtils';

// init data structurs
export type Pixel = {
  x: number;
  y: number;
};

export type Color = {
  r: number;
  g: number;
  b: number;
};

let pixels: Color[][] = new Array(screenHeight).fill(undefined).map(() =>
  new Array(screenWidth).fill(undefined).map(() => {
    return { r: 255, g: 255, b: 255 };
  }),
);

// modifie pixels
// drawLine({ x: 0, y: 0 }, { x: 10, y: 0 }, pixels);
// drawLine({ x: 0, y: 0 }, { x: 0, y: 10 }, pixels);
// drawLine({ x: 0, y: 0 }, { x: 10, y: 10 }, pixels);
// drawLineDirection({ x: 2, y: 2 }, { x: 13, y: 5 }, pixels);
// drawLineDirection({ x: 2, y: 13 }, { x: 13, y: 5 }, pixels);
// drawLineDirection({ x: 2, y: 13 }, { x: 2, y: 2 }, pixels);
// drawLine({ x: 0, y: 0 }, { x: 7, y: 4 }, pixels);

drawLineBresenhamDirction({ x: 2, y: 2 }, { x: 13, y: 5 }, pixels);

// creating ppm file
fs.writeFileSync('.out/image.ppm', createPpmFile(pixels));
console.log('finished');
