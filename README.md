# Daily Drinks Serveless Website Made by React

## System Requirement
* [Node.js](https://nodejs.org) v10.x
* [NPM](https://www.npmjs.com/) package manager
* [Yarn](https://yarnpkg.com) package manager

## Initialization
```
npm install
yarn add
```

## Useful Scripts
```
npm start
yarn start
```
Run dev code

```
npm test
yarn test
```
Run test module

```
npm run build
yarn run build
```
Build production code

## Stack
```
1. React to render page and implement immediate update.

2. Store2 to store state to session storage, it could also store in local storage. But there is an storage limit no more than 4KB data which won't be able to save a lot of state.

3. node-sass for programming styles.

4. react-icons for FontAwesome icons.

5. react-router-dom was initially for routing page, but I realised it's a pretty small project and doesn't require routing.
```

## Notice
```
Due to local/session storage limit, the drinks you could save may not be more than 4 or even less. And it's not fool-proof design and the format of all data are all string which are what the users type in.
```

