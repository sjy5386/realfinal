import * as fs from 'fs';

class FileObject {
    name: string;
    data: string;

    constructor(name: string, data: Buffer) {
        this.name = name;
        this.data = data.toString('base64');
    }
}

function from(obj: any): Promise<FileObject> {
    return new Promise(async (resolve, reject) => {
        resolve(new FileObject(obj.name, Buffer.from(obj.data, 'base64')));
    });
}


function read(path: string, filename: string): Promise<FileObject> {
    return new Promise(async (resolve, reject) => {
        const buf: Buffer = await fs.promises.readFile(path);
        resolve(new FileObject(filename, buf));
    });
}

async function write(path: string, fileObject: FileObject): Promise<void> {
    await fs.promises.writeFile(path, Buffer.from(fileObject.data, 'base64'));
}

export {
    FileObject, from, read, write
};
