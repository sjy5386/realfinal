import * as branch from './branch';
import * as commit from './commit';

class Document {
    name: string;
    current: string;
    commits: Array<commit.Commit>;
    branches: Array<branch.Branch>;

    constructor(name: string) {
        this.name = name;
        this.current = 'master';
        this.commits = [];
        this.branches = [
            new branch.Branch('master', null)
        ];
    }
}

export {
    Document
};
