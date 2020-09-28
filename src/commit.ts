import * as crypto from 'crypto';
import * as fileObject from './fileObject';

class Commit {
    id: string;
    message: string;
    author: string;
    file: fileObject.FileObject;
    timestamp: Date;
    parent: string | undefined;

    constructor(message: string, author: string, file: fileObject.FileObject, parent: string | null) {
        this.timestamp = new Date();
        this.id = crypto.createHash('sha512').update(`${message}${author}${file}${this.timestamp}`).digest('hex');
        this.message = message;
        this.author = author;
        this.file = file;
        this.parent = parent ? parent : undefined;
    }
}

export {
    Commit
};
