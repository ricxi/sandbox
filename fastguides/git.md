# Git
## Creating a git repo for an existing project
1. Create a local repo by typing `git init` in the project directory
```git
$ git init
```
2. Add project files (also used to make changes) in the project directory
```git
$ git add .
```
3. Go to github and create an empty repository (i.e., there should not be any `readme.md` file)
4. Go back to the project directory and run the following commands:
```git
$ git remote add origin git@github.com:irixoc/sandbox.git
$ git branch -M main
```
5. Push local repo to remote:
```git
$ git push -u origin main
```
**Notes:** With a `-m` or `-M` option, `<oldbranch>` will be renamed to `<newbranch>`. If `<oldbranch>` had a corresponding reflog, it is renamed to match `<newbranch>`, and a reflog entry is created to remember the branch renaming. If `<newbranch>` exists, -M must be used to force the rename to happen.

## Standard Workflow
1. Create a branch
2. Checkout the branch
```git
$ git branch alternate-universe
$ git checkout alternate-universe
```
3. Checkout main branch, merge changes into it, and push to remote
```git
$ git checkout main
$ git merge alternate-universe
$ git push -u origin main
```
## Standard Bad Workflow
```git
$ git add .
$ git commit -m "commit message"
$ git push -u origin main
```