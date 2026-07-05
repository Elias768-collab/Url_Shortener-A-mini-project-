import {promises as fs} from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "urls.json");

//Read URLs
export async function readUrls() {
   const data = await fs.readFile(filePath, "utf8");
   return JSON.parse(data); 
}

//write URLs
export async function writeUrls(urls) {
    await fs.writeFile(
        filePath, JSON.stringify(urls, null, 2)
    );
}