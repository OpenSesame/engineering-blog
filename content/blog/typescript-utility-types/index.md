---
title: TypeScript Utility Types in React
author: Nick Bernard
date: 2022-05-17T16:32:38.186Z
description: Learn about a few handy utility types from TypeScript.
---
![Tools on workbench](tools.jpg "Tools!")

If you've been writing TypeScript for any amount of time, you've probably ran across some of the language's built-in [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

## Record

The [Record type](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) essentially represents an object. 

## Partial

The [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) type makes all properties of a type optional. This is particularly useful for creating mock objects for testing. You can create a [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1) that uses the desired type without needing to provide every value:

```typescript
const createMockProfile = ({
  name: 'Mock User',
  avatar: 'test.jpg'
}: Partial<Profile>): Profile => ({
  name,
  avatar,
});

const testProfile = createMockProfile({ name: 'Test User' }); 

console.log(testProfile); // { name: 'Test User', avatar: 'test.jpg' }
```

The opposite of Partial is Required.

## Pick and Omit



Try these out in the [TypeScript Playground](https://www.typescriptlang.org/play?strictNullChecks=true&q=171#example/built-in-utility-types).