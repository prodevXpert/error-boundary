# Try/Catch Approach for handling errors
1. Requires defining an Error handler component to display in case an error occurs
2. wrap each component returned element in try/catch block
3. this approach is fine but we need to wrap child component repeatedly.
4. We want to avoid repetition and it can be done if we wrap our parent component in
    try/ catch block, BUT doing so will not work due to the approach React uses for function calls.
## This is Where React Error boundary comes in
```Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.```

## As at React 17.0.2, Error Boundary works only in

1. Class component
2. It must implement static getDerivedStateFromError() or componentDidCatch()

In order to use Error Boundary in Functional Component, use react-error-boundary.

# Exceptions to Error handling
Because react-error-boundary uses react error boundary in the background there are a few exceptions to the errors that can be handled.

These errors are not handled by react-error-boundary

1. Event handlers
2. Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
3. Server side rendering
4. Errors thrown in the error boundary itself (rather than its children)