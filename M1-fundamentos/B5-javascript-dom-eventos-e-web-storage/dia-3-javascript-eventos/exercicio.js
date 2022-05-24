function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createEachDayMonth() {
  const dezNumberList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const numberDaysList = document.querySelector('#days');

  for (let i = 0; i < dezNumberList.length; i += 1) {
    const dayOfList = dezNumberList[i];
    const dayCreator = document.createElement('li');
    dayCreator.innerText = dayOfList;

    numberDaysList.appendChild(dayCreator);
  }
}

createEachDayMonth();

function holidays(string) {
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  const btnCreator = document.createElement('button');
  btnCreator.innerText = string;
  btnCreator.id = 'btn-holiday';

  btnContainer.appendChild(btnCreator);
}

holidays('Feriados');

function holidaysDisplayChange() {
  const backgroundDefault = '#eee';
  const newBackground = 'rgb(153, 255, 153)';
  let getButton = document.getElementById('btn-holiday');
  getButton.addEventListener('click', myFunction);

  function myFunction() {
    let getDaysItems = document.getElementById('holiday');
      if (getDaysItems.style.backgroundColor === newBackground) {
        getDaysItems.style.backgroundColor = backgroundDefault;
      }else {
        getDaysItems.style.backgroundColor = newBackground;
      }
    }    
}

holidaysDisplayChange();

function sextouu(string) {
  const btnCreator2 = document.createElement('button');
  const btnContainer2 = document.getElementsByClassName('buttons-container')[0];
  btnContainer2.appendChild(btnCreator2);
  btnCreator2.id = 'btn-friday';
  btnCreator2.innerText = string;

  const getButton2 = document.getElementById('btn-friday');
  getButton2.addEventListener('click', myEvent);

  function myEvent(){
    const getDaysItems2 = document.getElementsByClassName('friday-days-list');
    console.log(getDaysItems2);
    const defaultValue = [4, 11, 18, 25];
    for (let i = 0; i < getDaysItems2.length; i += 1){
      if (getDaysItems2[i].innerText == 4 || getDaysItems2[i].innerText % 7 == 4) {
        getDaysItems2[i].innerText = 'SEXTOUU!';
      } else if (getDaysItems2[i].innerText === 'SEXTOUU!') {
        getDaysItems2[i].innerText = defaultValue[i];
      }
    }
  }
}

sextouu('Sexta-feira');

function fridayDaysCreator() {
  const getFridays = document.getElementsByTagName('li');
  for (let i = 0; i < getFridays.length; i += 1){
      if (getFridays[i].innerText == 4 || getFridays[i].innerText % 7 == 4 && getFridays[i].innerText != 2020) {
        getFridays[i].className = 'friday-days-list';
      }
      if (getFridays[i].innerText == 25) {
        getFridays[i].id = 'holiday';
      }
  }
}

fridayDaysCreator();

function zoom() {
  const getDaysText = document.getElementById('days').childNodes;
  for (let i = 0; i < getDaysText.length; i += 1){
    getDaysText[i].addEventListener('mouseover', function(event){
      event.target.style.fontSize = "50px";
    });
    getDaysText[i].addEventListener('mouseout', function(event){
      event.target.style.fontSize = '20px';
    })
  }
}

zoom();

// function getStringInput() {
//   let getInputText = document.querySelector('#task-input');
//   let text = getInputText.value;
//   return text;
// }

function addTasks(string) {
  let taskContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerText = string;
  taskContainer.appendChild(taskName);
}  

addTasks();

function taskDiv(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;

  taskContainer.appendChild(newDiv);
}

taskDiv();

function selectedEventTask() {
  let taskDiv = document.querySelector('.task');
  taskDiv.addEventListener('click', function(){
    if (taskDiv.className === 'task'){
    taskDiv.className = 'task selected'
    } else {
      taskDiv.className = 'task';
    }
  })
}

selectedEventTask();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addCompromissos() {
  let getInputText = document.getElementById('task-input');
  let getAddBtn = document.getElementById('btn-add');
  let getTaskList = document.getElementsByClassName('task-list')[0];

  getAddBtn.addEventListener('click', function(){
    if (getInputText.value.length > 0) {
      let createTask = document.createElement('li');
      createTask.innerText = getInputText.value;
      getTaskList.appendChild(createTask);
      getInputText.value = '';
    } else {
      alert('nenhum caracter foi inserido!');
    }
  })

  getInputText.addEventListener('keypress', function(event) {
    if (getInputText.value.length > 0 && event.key === 'Enter') {
      let createTask = document.createElement('li');
      createTask.innerText = getInputText.value;
      getTaskList.appendChild(createTask);
      getInputText.value = '';
    }    
  })
}

addCompromissos();