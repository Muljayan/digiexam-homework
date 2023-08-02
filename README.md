### Thought Process

- I converted the type Input of the input field if the type is number, so that the input field only accepts numbers.
- Alternatively, we could keep the current setup and add validation using isNaN()
- I've added validation for the number input type to add a range of numbers
- For string type input type I initially used regex to check for hard coded patterns. (This is currently commented off)
- The updated validation uses an input field for users to add custom regex patterns


### Additional functionality
- Add date validation similar to number validation to ensure the date is within a range
