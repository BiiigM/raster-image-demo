import fs from 'fs';

// init data structurs
const screenWidth = 256;
const screenHeight = 256;
const maxPixelColor = 255;
const ppmHeader = `P3
${screenWidth} ${screenHeight}
${maxPixelColor}`;

type Pixel = {
  r: number;
  g: number;
  b: number;
};

let pixels: Pixel[][] = new Array(screenHeight).fill(undefined).map(() =>
  new Array(screenWidth).fill(undefined).map(() => {
    return { r: 255, g: 255, b: 255 };
  }),
);

// modifie pixels
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

// creating ppm file
function createPpmFile(pixels: Pixel[][]): string {
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

function pixelToString(pixel: Pixel) {
  return `${pixel.r} ${pixel.g} ${pixel.b}`;
}

fs.writeFileSync('.out/image.ppm', createPpmFile(pixels));
console.log('finished');
