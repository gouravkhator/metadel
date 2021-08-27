import fs from "fs";

// Demo function for reading image
export function readImage(imageFilePath: string) {
  if(fs.existsSync(imageFilePath)){
    const imageBuffer = fs.readFileSync(imageFilePath);

    const base64 = imageBuffer.toString('base64');
    return base64;
  }

  return null;
}

console.log(readImage('/home/gourav/Pictures/test1.png'));
