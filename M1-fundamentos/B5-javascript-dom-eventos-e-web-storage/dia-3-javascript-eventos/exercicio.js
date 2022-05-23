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

    if (dezNumberList[i] === 25) {
      dayCreator.className = 'days-list';
    }

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
    let getDaysItems = document.getElementsByClassName('days-list');
    for (let i = 0; i < getDaysItems.length; i += 1) {
      if (getDaysItems[i].style.backgroundColor === newBackground) {
        getDaysItems[i].style.backgroundColor = backgroundDefault;
      }else {
        getDaysItems[i].style.backgroundColor = newBackground;
      }
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
    for (let i = 0; i < getDaysItems2.length; i += 1)
      if (getDaysItems2[i].innerText == 4 || getDaysItems2[i].innerText % 7 == 4) {
        getDaysItems2[i].innerText = 'SEXTOUU!';
      }
    }
}

sextouu('Sexta-feira');

function fridayDaysCreator() {
  const getFridays = document.getElementsByTagName('li');
  for (let i = 0; i < getFridays.length; i += 1)
      if (getFridays[i].innerText == 4 || getFridays[i].innerText % 7 == 4) {
        getFridays[i].className = 'friday-days-list';
      }
}

fridayDaysCreator();

