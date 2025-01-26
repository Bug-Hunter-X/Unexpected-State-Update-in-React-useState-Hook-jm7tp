# React useState Hook Bug

This repository demonstrates a common, yet subtle, bug related to React's `useState` hook.  The bug arises from calling `setCount` multiple times within a single event handler, leading to unpredictable state updates.

## Bug Description
The `MyComponent` component utilizes `useState` to manage a count. The `handleClick` function intends to increment the count by two, but due to the way state updates work asynchronously in React, the second call to `setCount` overrides the first, resulting in the count only incrementing by one.

## Solution
The solution uses functional updates to address the issue.  Instead of directly modifying `count`, a function is passed to `setCount` to calculate the updated state based on the previous value.  This ensures that the update uses the correct state value, even when multiple calls to `setCount` occur within the same event handler.