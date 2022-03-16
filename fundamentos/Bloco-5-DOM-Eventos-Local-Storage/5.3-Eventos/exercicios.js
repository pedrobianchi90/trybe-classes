const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

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

function createDaysOfTheMonth() {
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 25 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    };
  };
};

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  const holidayButton = document.createElement('button');
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  holidayButton.innerHTML = buttonName;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);
};

createHolidayButton('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();

function createFridayButton() {
  let buttonsContainer = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  fridayButton.innerHTML = 'Sexta-feira';
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton();

function changeFridayText(fridaysArray) {
  let fridays = document.querySelectorAll('.friday');
  let fridayButton = document.querySelector('#btn-friday');

  fridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML === 'Sextou, diacho') {
        fridays[index].innerHTML = fridaysArray[index];
      } else {
        fridays[index].innerHTML = 'Sextou, diacho';
      }
    }
  })
};
changeFridayText([4, 11, 18, 25]);

let days = document.querySelector('#days');

function zoomIn(event) {
  event.target.style.fontSize = '40px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

days.addEventListener('mouseover', zoomIn);
days.addEventListener('mouseout', zoomOut);

function addTask(task) {
  let taskItem = document.createElement('span');
  let mytasks = document.querySelector('.my-tasks');
  taskItem.innerHTML = task

  mytasks.appendChild(taskItem);
}
addTask('Cozinhar');

function addSubtitle(color) {
  let subtitle = document.createElement('div');
  let mytasks = document.querySelector('.my-tasks');

  subtitle.className = 'task';
  subtitle.style.backgroundColor = color;

  mytasks.appendChild(subtitle);
}
addSubtitle('green');

function taskSelected() {
  let selectedTask = document.getElementsByClassName('task-selected');
  let task = document.querySelector('.task-selected');

  task.addEventListener('click', function() {
    if(selectedTask.length === 0) {
      event.target.className = 'task-selected';
    } else {
      event.target.className = 'task'
    }
  })
};
taskSelected();

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






