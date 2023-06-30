let myExcercises = [
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
  {
    name: "Squat",
    unit: "kg",
    goal: 100,
  },
  {
    name: "Deadlift",
    unit: "kg",
    goal: 120,
  },
  {
    name: "Shoulder Press",
    unit: "kg",
    goal: 50,
  },
  {
    name: "Bicep Curls",
    unit: "kg",
    goal: 20,
  },
  {
    name: "Leg Press",
    unit: "kg",
    goal: 150,
  },
  {
    name: "Lat Pulldown",
    unit: "kg",
    goal: 70,
  },
  {
    name: "Push-ups",
    unit: "reps",
    goal: 50,
  },
  {
    name: "Sit-ups",
    unit: "reps",
    goal: 100,
  },
  {
    name: "Plank",
    unit: "seconds",
    goal: 60,
  },
];

console.log(myExcercises);

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

// display the myExcercises as a table
function displayExcercises() {
  let myTable = document.getElementById("myTable");
  myTable.innerHTML = "";
  myExcercises.forEach((excercise) => {
    // console.log(` ${excercise.name} - ${excercise.goal}${excercise.unit}`);

    // console.log(excercise.id);

    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.innerText = `${excercise.name}`;
    col2.innerText = `${excercise.goal}${excercise.unit}`;

    // Create the delete button
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    editButton.classList.add("showEditForm");

    deleteButton.innerHTML = "X";
    editButton.innerHTML = "Edit";
    col3.appendChild(deleteButton);
    col3.appendChild(editButton);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    myTable.appendChild(row);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", () => {
      let index = myExcercises.indexOf(excercise);
      if (index > -1) {
        myExcercises.splice(index, 1);
      }
      displayExcercises();
    });

    let index = myExcercises.indexOf(excercise);

    // Add an event listener to the edit button
    editButton.addEventListener("click", () => {
      console.log(index);
      if (index > -1) {
        let editCard = document.getElementById("editCard");
        console.log(editCard);
        console.log(myExcercises[index]);
        let editName = document.getElementById("editName");
        let editUnit = document.getElementById("editUnit");
        let editGoal = document.getElementById("editGoal");

        editName.value = myExcercises[index].name;
        editUnit.value = myExcercises[index].unit;
        editGoal.value = myExcercises[index].goal;
        currentIndex.value = index;

        editCard.classList.remove("hidden");
      }
    });
  });
}

// add an eventlistenter to the editForm update button
let editForm = document.querySelector("#editForm");
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (currentIndex.value > -1) {
    console.log(myExcercises[currentIndex.value]);
  }
});

// submit form action
const formElem = document.querySelector("#form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = formElem.querySelector("#name").value;
  const unitInput = formElem.querySelector("#unit").value;
  const goalInput = formElem.querySelector("#goal").value;
  const newExcercise = new Excercise(nameInput, unitInput, goalInput);
  addExcercise(newExcercise, myExcercises);
  displayExcercises();
});

// add event listener to editForm

displayExcercises();

function showHideForm() {
  let form = document.getElementById("formCard");
  let showForm = document.getElementById("showForm");
  let hideForm = document.getElementById("hideForm");

  showForm.addEventListener("click", () => {
    form.classList.remove("hidden");
  });

  hideForm.addEventListener("click", () => {
    form.classList.add("hidden");
  });
}

showHideForm();
