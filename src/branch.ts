import * as commit from './commit';

class Branch {
    name: string;
    head: string | undefined;

    constructor(name: string, head: commit.Commit | null | undefined) {
        this.name = name;
        this.head = head ? head.id : undefined;
    }
}

function from(obj: any): Promise<Branch> {
    return new Promise(async (resolve, reject) => {
        resolve(new Branch(obj.name, obj.head));
    });
}

export {
    Branch, from
};
