import * as branch from './branch';
import * as commit from './commit';

class Repository {
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

function from(obj: any): Promise<Repository> {
    return new Promise(async (resolve, reject) => {
        const repository: Repository = new Repository(obj.name);
        repository.current = obj.current;
        if ((obj.commits.length > 0) && !(obj.commits[0] instanceof commit.Commit)) {
            obj.commits.forEach((element: any) => {
                commit.from(element);
            });
        }
        repository.commits = obj.commits;
        if ((obj.branches.length > 0) && !(obj.branches[0] instanceof branch.Branch)) {
            obj.branches.forEach((element: any) => {
                branch.from(element);
            });
        }
        repository.branches = obj.branches;
        resolve(repository);
    });
}

export {
    Repository, from
};
