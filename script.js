let myExercises = [
  {
    name: "Bench Press",
    unit: "kg",
    goal: 80,
  },
  {
    name: "Cable Row",
    unit: "kg",
    goal: 60,
  },
];

// excercise constructor
class Excercise {
  constructor(name, unit, goal) {
    this.name = name;
    this.unit = unit;
    this.goal = goal;
  }
}

// add excercises function
function addExcercise(excercise, database) {
  database.push(excercise);
}

// display the myExercises as a table
function displayExcercises() {
  let myTable = document.getElementById("myTable");
  myTable.innerHTML = "";
  myExercises.forEach((excercise) => {
    console.log(` ${excercise.name} - ${excercise.goal}${excercise.unit}`);

    //   console.log(myTable);

    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    col1.innerText = `${excercise.name}`;
    col2.innerText = `${excercise.goal}${excercise.unit}`;

    row.appendChild(col1);
    row.appendChild(col2);
    myTable.appendChild(row);
  });
}

// submit form action
const formElem = document.querySelector("#form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = formElem.querySelector("#name").value;
  const unitInput = formElem.querySelector("#unit").value;
  const goalInput = formElem.querySelector("#goal").value;
  const newExercise = new Excercise(nameInput, unitInput, goalInput);
  addExcercise(newExercise, myExercises);
  displayExcercises();
});

displayExcercises();
