# Git
Quick guide for git newbies.
The most OP git log command (A DOG): 
```
$ git log --all --decorate --oneline --graph
```
remove `--oneline if it doesn't work`

## Creating a git repo for an existing project
1. Create a local repo by typing `git init` in the project directory
```git
$ git init
```
2. Add/stage project files (also used to make changes) in the project directory
```git
$ git add .
```
(to unstage a file, run: `git reset .`)
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
**Notes:** 
* With a `-m` or `-M` option, `<oldbranch>` will be renamed to `<newbranch>`. If `<oldbranch>` had a corresponding reflog, it is renamed to match `<newbranch>`, and a reflog entry is created to remember the branch renaming. If `<newbranch>` exists, -M must be used to force the rename to happen.
* `git commit --amend -m "amends the previous commit message"`

## Standard Workflow
1. Create a branch
2. Checkout the branch, add/stage changes, and commit changes
```git
$ git branch alternate-universe
$ git checkout alternate-universe
$ git add .
$ git commit -m "message"
```
3. Checkout main branch, merge changes into it, and push to remote
```git
$ git checkout main
$ git merge alternate-universe
$ git push -u origin main
```
**Note:** Running `git branch` will list all the current branches

### Fetch
In case you need to fetch updates from the main branch
```git
$ git fetch origin
```

## Stashing
1. Save work without commiting by stahing
```git
$ git stash -u 
$ git stash pop
```

# Contributing to Open-Source
A quick guide on how to contribute to an open-source project (work-in-progress)
1. Fork the repo 
2. Clone the fork to my local machine (might have to run npm install to install dependencies)
3. Create a branch (`git checkout -b my-feature`)
4. Make changes, add and commit changes (`git add .`, `git commit -m "message"`)
5. Push feature branch to our fork of the project (`git push origin my-feature`)
6. Go to github and make a pull request (write a nice message)

If the maintainer asks for changes, go back to feature branch, make the changes and repeat steps 4-5. The pull request should be automatically updated.

How do I update my branch before I merge changes?