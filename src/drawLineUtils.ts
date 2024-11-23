import { Color, Pixel } from './index';

export function drawLine(pixel1: Pixel, pixel2: Pixel, pixels: Color[][]) {
  const dx = pixel2.x - pixel1.x;
  const dy = pixel2.y - pixel1.y;
  const m = dy / dx;

  for (let i = 0; i < dx + 1; i++) {
    const x = pixel1.x + i;
    const y = Math.round(pixel1.y + i * m);
    drawPixel(x, y, pixels);
  }
}

export function drawLineDirection(
  pixel1: Pixel,
  pixel2: Pixel,
  pixels: Color[][],
) {
  const dx = pixel2.x - pixel1.x;
  const dy = pixel2.y - pixel1.y;
  const step = Math.max(Math.abs(dx), Math.abs(dy));
  if (step != 0) {
    const stepX = dx / step;
    const stepY = dy / step;

    for (let i = 0; i < step + 1; i++) {
      const x = Math.round(pixel1.x + i * stepX);
      const y = Math.round(pixel1.y + i * stepY);
      drawPixel(x, y, pixels);
    }
  }
}

export function drawLineBresenham(
  pixel1: Pixel,
  pixel2: Pixel,
  pixels: Color[][],
) {
  const dx = pixel2.x - pixel1.x;
  const dy = pixel2.y - pixel1.y;
  let p = 2 * dy - dx;
  let y = pixel1.y;

  for (let i = 0; i < dx + 1; i++) {
    drawPixel(pixel1.x + i, y, pixels);
    if (p >= 0) {
      y += 1;
      p = p - 2 * dx;
    }
    p = p + 2 * dy;
  }
}

export function drawLineBresenhamDirction(
  pixel1: Pixel,
  pixel2: Pixel,
  pixels: Color[][],
) {
  if (Math.abs(pixel2.x - pixel1.x) > Math.abs(pixel2.y - pixel1.y)) {
    drawLineBresenhamH(pixel1, pixel2, pixels);
  } else {
    drawLineBresenhamH(pixel1, pixel2, pixels);
  }
}

function drawLineBresenhamH(pixel1: Pixel, pixel2: Pixel, pixels: Color[][]) {
  let dx, dy;

  if (pixel1.x > pixel2.x) {
    dx = pixel2.x - pixel1.x;
    dy = pixel2.y - pixel1.y;
  } else {
    dx = pixel2.x - pixel1.x;
    dy = pixel2.y - pixel1.y;
  }

  let p = 2 * dy - dx;
  let y = pixel1.y;

  const dir = dy < 0 ? -1 : 1;
  dy *= dir;

  for (let i = 0; i < dx + 1; i++) {
    drawPixel(pixel1.x + i, y, pixels);
    if (p >= 0) {
      y += 1;
      p = p - 2 * dx;
    }
    p = p + 2 * dy;
  }
}

function drawLineBresenhamV(pixel1: Pixel, pixel2: Pixel, pixels: Color[][]) {
  let dx, dy;

  if (pixel1.y > pixel2.y) {
    dx = pixel2.x - pixel1.x;
    dy = pixel2.y - pixel1.y;
  } else {
    dx = pixel2.x - pixel1.x;
    dy = pixel2.y - pixel1.y;
  }

  let p = 2 * dx - dy;
  let x = pixel1.x;

  const dir = dx < 0 ? -1 : 1;
  dx *= dir;

  for (let i = 0; i < dx + 1; i++) {
    drawPixel(x, pixel1.y + i, pixels);
    if (p >= 0) {
      x += 1;
      p = p - 2 * dy;
    }
    p = p + 2 * dx;
  }
}

function drawPixel(x: number, y: number, pixels: Color[][]) {
  pixels[y][x] = { r: 0, g: 0, b: 0 };
}
