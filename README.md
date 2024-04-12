# Git Merge Conflicts

## Description

A common situation you may run into are [merge conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts). These occur when multiple developers have changed the same lines of code and git cannot determine which version to use. You now have a conflict which must be manually resolved before proceeding. In this repository

### Directions

1. Fork this repository and [checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout) the `feature/navbar` branch which has already been created for you.

2. Look over the code and when ready go to Github and make a pull request to merge this code into the `main` branch. You should get a warning stating that there are conflicts and you must resolve them before proceeding.

3. Back in VS Code on the `feature/navbar` branch, run `git pull origin main`. This will pull the change in the `main` branch into your `feature/navbar` branch. Resolve the conflicts with your editor in VS Code so that the navbar in the feature branch and the newly pulled in changes from the `main` branch are in the updated `index.html` file.

4. Once you are satisfied with the changes, commit and push the `feature/navbar` branch. Your pull request should be updated and should be conflict free. Merge and submit.