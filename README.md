# Try/Catch Approach for handling errors
1. Requires defining an Error handler component to display in case an error occurs
2. wrap each component returned element in try/catch block
3. this approach is fine but we need to wrap child component repeatedly.
4. We want to avoid repetition and it can be done if we wrap our parent component in
    try/ catch block, BUT doing so will not work due to the approach React uses for function calls.
## This is Where React Error boundary comes in
