import * as crypto from 'crypto';
import * as fileObject from './fileObject';

class Commit {
    id: string;
    message: string;
    author: string;
    file: fileObject.FileObject;
    timestamp: Date;
    parent: string | undefined;

    constructor(message: string, author: string, file: fileObject.FileObject, parent: string | null | undefined) {
        this.timestamp = new Date();
        this.id = crypto.createHash('sha512').update(`${message}${author}${file}${this.timestamp}`).digest('hex');
        this.message = message;
        this.author = author;
        this.file = file;
        this.parent = parent ? parent : undefined;
    }
}

function from(obj: any): Promise<Commit> {
    return new Promise(async (resolve, reject) => {
        if (!(obj.file instanceof fileObject.FileObject)) {
            obj.file = await fileObject.from(obj.file);
        }
        resolve(new Commit(obj.message, obj.author, obj.file, obj.parent));
    });
}

export {
    Commit, from
};
