class FileObject {
    name: string;
    data: string;

    constructor(name: string, data: Buffer) {
        this.name = name;
        this.data = data.toString('base64');
    }
}
