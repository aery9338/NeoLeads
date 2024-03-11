# Store Structure in [Project Name]

## Overview

This document describes the organization of the `store` directory in our project. The `store` directory is crucial for managing global state in the application, typically using Redux or a similar state management tool.

## Store Directory Structure

The `store` directory is organized to ensure efficient state management, scalability, and maintainability. Here's the structure with a description for each subdirectory and file:

/src
|-- /store
|-- /actions # Action creators and types
|-- /reducers # Reducers to handle state changes
|-- /middleware # Custom middleware for the store
|-- /selectors # Reselect selectors or equivalent
|-- /types # TypeScript types or interfaces (if used)
|-- index.js # Store configuration and creation

### Detailed Description

- **`/actions`**: Contains all action creators and action types. Actions define what type of change is happening in the store.

- **`/reducers`**: Reducers specify how the state changes in response to actions sent to the store. Ideally, there should be separate files or folders for each reducer based on the application's domain.

- **`/middleware`**: If you're using middleware like Redux-Thunk or Redux-Saga, this directory will contain your custom middleware logic for side effects.

- **`/selectors`**: For libraries like Reselect, selectors are used to compute derived data from the store, enabling the application to minimize unnecessary renders.

- **`/types`**: In TypeScript-based projects, this directory contains type definitions or interfaces related to the Redux store.

- **`index.js`**: The main file where the store is configured and created. It combines reducers, applies middleware, and may handle store persistence.

## Best Practices

- **Modularity**: Keep your store modular by separating actions, reducers, and selectors. Each reducer should handle a specific part of the state.

- **Immutability**: Ensure that reducers maintain state immutability.

- **Testing**: Write tests for reducers, action creators, and selectors.

- **Documentation**: Document complex logic in the store, especially in middleware and reducers.

## Contribution

When contributing to the `store` directory, ensure your code adheres to the established patterns and best practices. Avoid directly mutating the state and break down complex logic into manageable pieces.

## Usage Example

Using Redux in a component:

```javascript
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "src/store/actions/counterActions";

const MyComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```
