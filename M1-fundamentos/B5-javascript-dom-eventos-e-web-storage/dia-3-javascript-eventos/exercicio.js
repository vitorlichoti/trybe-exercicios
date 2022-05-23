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
    dayCreator.className = 'days-list';

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
  const newBackground = 'red';
  let getButton = document.getElementById('btn-holiday');
  getButton.addEventListener('click', myFunction);

  function myFunction() {
    let getDaysItems = document.querySelectorAll('.days-list');
    for (let i = 0; i < getDaysItems.length; i += 1) {
      if (document.getElementsByClassName('days-list')[i].style.backgroundColor === backgroundDefault) {
        getDaysItems[i].style.backgroundColor = newBackground;
      }
    }    
  }
}

holidaysDisplayChange();

// function changeHolidaysBackground() {
//   const holidayButton = document.getElementById('btn-holiday');
//   const getHolidays = document.querySelectorAll('.holidays');
//   const background = 'rgb(238,238,238)';
//   const newColor = 'red';

//   holidayButton.addEventListener('click', function(){
//   for (let i = 0; i < getHolidays.length; i += 1) {
//     if (getHolidays[i].getElementsByClassName.style.backgroundColor === newColor) {
//       getHolidays[i].style.backgroundColor = background;
//     } else {
//       getHolidays[i].style.backgroundColor = newColor;
//     }
//   }
//   });
// }

// changeHolidaysBackground();