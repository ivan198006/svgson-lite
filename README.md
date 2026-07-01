# svgson-lite

Tiny zero-dependency SVG helper for Node.js.

## Install

```bash
npm i svgson-lite
```

## Local test

```bash
npm test
```

## Usage

```js
import {
  isSvg,
  getSvgSize,
  optimizeSvg,
  extractTags,
  changeFill
} from "svgson-lite";

const svg = `
<svg width="100" height="100" viewBox="0 0 100 100">
  <!-- comment -->
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>
`;

console.log(isSvg(svg));
console.log(getSvgSize(svg));
console.log(extractTags(svg));
console.log(optimizeSvg(svg));
console.log(changeFill(svg, "blue"));
```

## Features

- Check if a string is SVG
- Get SVG width, height, and viewBox
- Remove SVG comments
- Remove extra whitespace
- Extract SVG tag names
- Change fill color

## License

MIT
