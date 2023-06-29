# excercise-log

Set up your project with skeleton HTML/CSS and JS files.

All of your exercise objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new exercise objects into an array. Your code should look something like this:

```javascript
let myExercises = [];

function Exercise() {
  // the constructor...
}

function addExerciseToLog() {
  // do stuff here
}
```

Write a function that loops through the array and displays each exercise on the page. You can display them in some sort of table, or each on its own “card”. It might help for now to manually add a few exercises to your array so you can see the display.

Add a “NEW EXERCISE” button that brings up a form allowing users to input the details for the new exercise: name of the exercise (like bench press, leg press, etc.), the target kg, and the unit type. You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!

Add a button on each exercise’s display to remove the exercise from the log.

You will need to associate your DOM elements with the actual exercise objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the exercises array.

Note: You are not required to add any type of storage right now. You will have the option to come back to this project later on in the course.

## TODO

- [ ] #todo
