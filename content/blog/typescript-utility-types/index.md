---
title: TypeScript Utility Types
author: Nick Bernard
date: 2022-08-16T23:38:36.073Z
description: Learn about a few handy utility types from TypeScript.
---
![Tools on workbench](tools.jpg "Tools!")

Even if you've been writing TypeScript for a while, you might not have ran across the language's built-in [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). These are super handy and save you from having to implement common type transformations manually.  Here are a few utility types I reach for often.

## Record

The [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) type essentially represents an object. You can type an object with specific types for its keys and values using an [index signature](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures):

```typescript
type StudentName = { [id: number]: string; }
```

The equivalent type with a `Record` is a bit more concise:

```typescript
type StudentName = Record<number, string>;
```

If syntax were the only difference, I'd prefer the index signature since the `id` key gives more detail about the intent of the type.

The `Record` type gets really useful when you want to lock down the properties of an object. In the above example, keys can be any `string`, but here's an example of using a [union type](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions) of strings for the keys:

```typescript
type SupportedLocale = 'en' | 'fr' | 'es';

type LanguageName = Record<SupportedLocale, string>;

const languages: LanguageName = {
  'en': 'English',
  'fr': 'French',
  'es': 'Spanish',
};
 
```

If I try to add German to this list, the compiler gives us a nice error.

![TypeScript compile error.](screen-shot-2022-08-16-at-5.29.58-pm.png "Error")

Sometimes you won't have a nice list of

Another useful thing is taking the keys of an existing object and assigning different values. For example, you might have a type that's shared between UI and 



The `Record` type is pretty powerful!

## Partial

The [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) type makes all properties of a type optional. This is particularly useful for creating mock objects for testing. You can create a [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1) that uses the desired type without needing to provide every value:

```typescript
interface Profile {
  name: string;
  avatar: string;
}

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