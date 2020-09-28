import * as commit from './commit';

class Branch {
    name: string;
    head: string | undefined;

    constructor(name: string, head: commit.Commit | null) {
        this.name = name;
        this.head = head ? head.id : undefined;
    }
}

export {
    Branch
};
