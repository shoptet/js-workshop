# Introduction to TypeScript

Typescript is a superset of JavaScript, which adds optional static typings. This workshop is dedicated to introduce TS and its features.

## Prerequisites and installations

- **Node** (npm) https://nodejs.org/en/
- **TypeScript**

  ```js
  npm i -g typescript
  ```

  _(installing globally, if we don't have package.json)_

- **Compiling TypeScript with `tsc`** (already in TS package)

  `tsc main.ts` -> generating `main.js` file from TS

- **Configuration and `tsconfig`**

  ```js
  tsc --init // getting tsconfig.json
  tsc -w // watching files and compile them on change
  ```

  _Adding `tsconfig.json` to our project_

## Topics

- Introduction & Setup
- Compiling TS with TSC compiler
- tsconfig and better workflow
- Basic types, objects, arrays, enums, functions (<https://www.typescriptlang.org/docs/handbook/basic-types.html>)
- More advanced stuff (Generics, Unions etc)
