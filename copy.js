import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = "C:/Users/MANJU/.gemini/antigravity-ide/brain/f36cf6a7-5d45-4d6a-ad76-76461dc6030e/media__1786588991105.jpg";
const destPublic = path.join(__dirname, 'client', 'public', 'profile.jpg');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, destPublic);
    console.log("--> Profile picture copied to client/public/profile.jpg successfully!");
  } else {
    console.log("Source file not found at:", src);
  }
} catch (e) {
  console.error("Copy error:", e);
}
