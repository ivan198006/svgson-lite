import {
  isSvg,
  getSvgSize,
  optimizeSvg,
  extractTags,
  changeFill
} from "./index.js";

const svg = `
<svg width="120" height="80" viewBox="0 0 120 80">
  <!-- test comment -->
  <rect width="120" height="80" fill="red" />
</svg>
`;

console.log("isSvg:", isSvg(svg));
console.log("size:", getSvgSize(svg));
console.log("tags:", extractTags(svg));
console.log("optimized:", optimizeSvg(svg));
console.log("changed fill:", changeFill(svg, "#000"));
