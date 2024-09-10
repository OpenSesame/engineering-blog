---
title: Gotchas with React Hook Form
author: Nick Bernard
date: 2022-07-12T20:49:05.318Z
description: Learn how to avoid some common pitfalls with the popular form library
---
* setValue does not dirty or revalidate the field by default
* A form can be dirty when \`dirtyFields\` is empty: https://github.com/react-hook-form/react-hook-form/issues/4740
* The watch API points to a reference of the form data, not an immutable copy
* setValue is very slow; use insert/replace/delete