import fs from "fs/promises";
const filePath = "./hello.txt";

async function readAndWriteFile() {
    try {
        await fs.writeFile(filePath, "Hello, Node.js beginner!");
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (error) {
        console.error("Error:", error);
    }
}
readAndWriteFile();
