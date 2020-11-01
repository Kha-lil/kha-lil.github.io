"use strict";

const hours = document.querySelector('#hours');
const extraHours = document.querySelector('#extra-hours');
const calcBtn = document.querySelector('button');
const hoursWorkedDetail = document.querySelector('.hours-worked-detail');
const extraHoursWorkedDetail = document.querySelector('.extra-hours-worked-detail');
const totalSalary = document.querySelector('.total-salary');

let hoursWorked;
let extraHoursWorked;
let salary;

function calculateSalary (hours, extraHours) {
  hoursWorked = +hours.value  * 1000;
  extraHoursWorked = +extraHours.value * 200;
  if (hoursWorked !== 0) {
    if (hoursWorked < 0 || extraHoursWorked < 0 ) {
      alert('Input a positive number');
    } else {
      salary = hoursWorked + extraHoursWorked;
      showSalary();
    }
  } else {
    alert('Please, input the total number of employee working hour.');
  }

  function showSalary() {
    showEmployeeTWH();
  }
}

// showing employees working hours details on screen.
function showEmployeeTWH() {
  hoursWorkedDetail.innerHTML = `<p>Total salary for hours worked is #${hoursWorked}</p>`;
  extraHoursWorkedDetail.innerHTML = `<p>Total salary for extra hours worked is #${extraHoursWorked}</p>`;
  totalSalary.innerHTML = `<p>Your Total Salary is #${salary}</p>`;
}

calcBtn.addEventListener('click', function () {
  calculateSalary(hours, extraHours);
})