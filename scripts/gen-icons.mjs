import sharp from 'sharp'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const svg = readFileSync(resolve(__dir, '../public/icon.svg'))

const sizes = [
  { file: 'public/icon-192.png',        size: 192 },
  { file: 'public/icon-512.png',        size: 512 },
  { file: 'public/apple-touch-icon.png',size: 180 },
]

for (const { file, size } of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(resolve(__dir, '..', file))
  console.log(`✓ ${file} (${size}×${size})`)
}
