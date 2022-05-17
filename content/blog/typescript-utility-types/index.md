---
title: TypeScript Utility Types in React
author: Nick Bernard
date: 2022-05-17T16:32:38.186Z
description: Learn about a few handy utility types from TypeScript.
---
![Tools on workbench](tools.jpg)

If you've been writing TypeScript for any amount of time, you've probably ran across some of the built-in [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

```typescript
interface Profile {
  name: string;
  avatar?: string;
}
```

## Record

The [record type](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) is 

## Partial

The [partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) type makes all properties of a type optional. This is particularly useful for creating mock objects for testing. You can create a [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1) that uses the desired type without needing to provide every value:

```typescript
const createMockProfile = ({ name: 'Mock User', avatar: 'test-avatar.jpg' }: Partial<Profile>): Profile => ({
  name,
  avatar,
});

const testProfile = createMockProfile({ name: 'Test User' }); 
```