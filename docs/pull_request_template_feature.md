# pull-request feature template

## Summary

_Provide an overview_

## Features added

- Auth
  - login
  - Register
- Menu

## Details or description

_Add more content to describe the changes_

## References or features links

1. [joinafrik.com/login](joinafrik.com/login)
1. [joinafrik.com/dashboard](joinafrik.com/dashboard)

## Screenshorts

1. Register admin styling

![Markdown logo](https://res.cloudinary.com/chanel-muhesi/image/upload/v1640093945/Screenshot_from_2021-12-21_16-26-22_miuo58.png)

## checklists

- [ ] Responsive dashboard
- [x] Responsive dashboard
- [x] Responsive dashboard

fixe #1

---

---

# pull-request bug template

## Summary

_Provide an overview of bug fixed_

## Features added

- Auth
  - login
  - Register
- Menu

## description

_Describe bug found_

### Problem found

```javascript
function addJobWhitError(data, token) {
  try {
    return { success: true };
  } catch (error) {
    console.log(`error`, error.message);
  }
}
```

### Description solution of bugs proposed

1. In this file [src/redux/actions/jobActions.js](src/redux/actions/jobActions.js) below  function  are added....


```javascript
function addJob(data, token) {
  try {
    return { success: true };
  } catch (error) {
    console.log(`error`, error.message);
  }
}


```

## References
1. [src/redux/actions](src/redux/actions)
1. [src/components/auth](src/components/auth)


## checklists

- [ ] Responsive dashboard
- [x] Responsive dashboard

fixe #1

---

---

# pull-request chore template


## Summary

_Provide an overview_



## description

```
- Describe your doc here


```
## References
1. [src/redux/actions](src/redux/actions)
1. [src/components/auth](src/components/auth)


## checklists

- [ ] Responsive dashboard
- [x] Responsive dashboard


fixe #1

---
