import { Color, Pixel } from './index';

export function drawCircle(center: Pixel, radius: number, pixels: Color[][]) {
  let x = radius,
    y = 0;

  // Init point
  drawPixel(x + center.x, y + center.y, pixels);

  if (radius > 0) {
    drawPixel(x + center.x, -y + center.y, pixels);
    drawPixel(y + center.x, x + center.y, pixels);
    drawPixel(-y + center.x, x + center.y, pixels);
  }

  let p = 1 - radius;
  for (; x > y; y++) {
    if (p <= 0) {
      p = p + 2 * y + 1;
    } else {
      x--;
      p = p + 2 * y - 2 * x + 1;
    }

    if (x < y) break;

    drawPixel(x + center.x, y + center.y, pixels);
    drawPixel(-x + center.x, y + center.y, pixels);
    drawPixel(x + center.x, -y + center.y, pixels);
    drawPixel(-x + center.x, -y + center.y, pixels);

    if (x != y) {
      drawPixel(y + center.x, x + center.y, pixels);
      drawPixel(-y + center.x, x + center.y, pixels);
      drawPixel(y + center.x, -x + center.y, pixels);
      drawPixel(-y + center.x, -x + center.y, pixels);
    }
  }
}

function drawPixel(x: number, y: number, pixels: Color[][]) {
  pixels[y][x] = { r: 0, g: 0, b: 0 };
}
