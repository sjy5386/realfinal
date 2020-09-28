import * as commit from './commit';

class Document {
    name: string;
    current: string;
    commits: Array<commit.Commit>;
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

class Branch {
    name: string;
    head: string | undefined;

    constructor(name: string, head: commit.Commit | null) {
        this.name = name;
        this.head = head ? head.id : undefined;
    }
}
