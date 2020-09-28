import * as crypto from 'crypto';
import * as fileObject from './fileObject';

class Document {
    name: string;
    current: string;
    commits: Array<Commit>;
    branches: Array<Branch>;

    constructor(name: string) {
        this.name = name;
        this.current = 'master';
        this.commits = [];
        this.branches = [
            new Branch('master', null)
        ];
    }
}

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

class Branch {
    name: string;
    head: string | undefined;

    constructor(name: string, head: Commit | null) {
        this.name = name;
        this.head = head ? head.id : undefined;
    }
}
