import * as fs from 'fs';

class FileObject {
    name: string;
    data: string;

    constructor(name: string, data: Buffer) {
        this.name = name;
        this.data = data.toString('base64');
    }
}

function readFile(path: string, filename: string): Promise<FileObject> {
    return new Promise(async (resolve, reject) => {
        const buf: Buffer = await fs.promises.readFile(path);
        resolve(new FileObject(filename, buf));
    });
}

function writeFile(path: string, fileObject: FileObject): Promise<void> {
    return new Promise(async (resolve, reject) => {
        await fs.promises.writeFile(path, Buffer.from(fileObject.data, 'base64'));
    });
}

export {
    FileObject, readFile, writeFile
};
