import sharp from "sharp";

const input = "src/assets/images/Hero.png";
const output = "src/assets/images/Hero.webp";

await sharp(input)
  .webp({
    quality: 82,
    effort: 6,
  })
  .toFile(output);

console.log("Hero image optimized successfully.");
console.log(`Output: ${output}`);