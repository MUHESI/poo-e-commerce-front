## Some rules to respect 

- **Never working on branch develop**

 > Create branch

In this project we must use 3 tasks to create different branch like :
1. feature/
1. chore/
1. bug/


### 1. feature/
- Create this kind of branch when you want to  add new  feature in project.

```
git checkout -b feature/{auth}-login
```

### 2. chore/
- Create this kind of branch when you want to provide some docs in project.

- As you can see 

```
git checkout -b chore/{docs}-developer-handbook
```

### 3. bug/
- Create this kind of branch when you want to fix a specific bug in project.

- You can make inspiration from below example

```
git checkout -b bug/{redux}-conflicts-jobAction
```
 > Create commit 

 - Each branch  has not to pass 5 commits
 - In each commit we have to found 3 free  parties :

 1. the commit title :
    - this title must give an overview of your changes  
 1. the body
    - Describe you commit per line
    ``` 
    git commit -m'docs[handBook]: create a handbook file
    > 
    > add description about workflow to respect by each developer
    > ...
    '
    ```
1. Specify the issue  

 > pull respect 

 - pull-request templates created , 
 - For every pull-request created, chose  kind of pull-request template

 - in docs/ we found pull_request_template_feature.md that has 3 templates; 

1. ***pull-request feature template***
1. ***pull-request bug template***
1. ***pull-request  chore template***

