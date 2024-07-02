function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Initialize with Overview section visible
document.getElementById('overview').style.display = 'block';

// Select elements
const spanEl = document.querySelectorAll('.hide');
const h2El = document.querySelector('.sidebar h2');
const spanElArray = [...spanEl];

console.log(spanElArray); // Debugging
console.log(h2El); // Debugging

// Function to run the mouse hover event
function mouseHover(event) {
  spanElArray.forEach(span => {
    // Remove 'hide' class from each span element
    span.classList.remove('hide');
  });
  console.log(`Removing 'hide' from`, h2El); // Debugging
  h2El.classList.remove('hide'); // Remove 'hide' class from h2 element
}

// Add the event listener to each element of the array
spanElArray.forEach(span => {
  span.addEventListener('mouseover', mouseHover);
});

// Data for student section
const tCaptions = ['S/N', 'Full Name', 'Course', 'Passcode', 'Cohort', 'Status'];
const namee = ['Ogbonna Christopher', 'Ntoh Johnson', 'Odo John', 'Animaku Michael', 'Emmanuel Reuben', 'Cyril Oseyamken', 'Chinonso', 'Abraham Adaeze'];
const course = ['Full Stack', 'Full Stack', 'Front-End', 'Full Stack', 'Front-End', 'Full Stack', 'Front-End', 'Back-End'];
const passcode = [89562, 46853, 65052, 39900, 23678, 89890, 45555, 90700];
const cohort = [16, 16, 31, 19, 16, 19, 31, 16];
const stat = ['Approved', 'Approved', 'Rejected', 'Approved', 'Approved', 'Approved', 'Rejected', 'Rejected'];

// Data for courses
const tCaptions1 = ['S/N', 'Course', 'Number of Students', 'Remarks'];
const courses = ['HTML5 Basics', 'CSS3 Basics', 'Bootstrap', 'JavaScript Language', 'Database Management'];
const studentNumber = [557, 535, 300, 150, 83];
const remarks = ['Completed', 'Completed', 'Pending', 'Not Completed', 'In Progress'];

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Handle student table creation
  const createTableBtn = document.getElementById('createTableBtn');
  if (createTableBtn) {
    createTableBtn.addEventListener('click', function () {
      const rows = namee.length;
      const columns = tCaptions.length;
      const container = document.getElementById('tableContainer');
      container.innerHTML = '';

      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const trHead = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const th = document.createElement('th');
        th.textContent = tCaptions[j];
        trHead.appendChild(th);
      }
      thead.appendChild(trHead);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
          const td = document.createElement('td');
          if (j === 0) {
            td.textContent = i + 1;
          } else if (j === 1) {
            td.textContent = namee[i];
          } else if (j === 2) {
            td.textContent = course[i];
          } else if (j === 3) {
            td.textContent = passcode[i];
          } else if (j === 4) {
            td.textContent = cohort[i];
          } else if (j === 5) {
            td.textContent = stat[i];
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      container.appendChild(table);
    });
  }

  // Handle course table creation
  const createCourseBtn = document.getElementById('createCourseBtn');
  if (createCourseBtn) {
    createCourseBtn.addEventListener('click', function () {
      const rows = courses.length;
      const columns = tCaptions1.length;
      const container = document.getElementById('tableeContainer');
      container.innerHTML = '';

      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const trHead = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const th = document.createElement('th');
        th.textContent = tCaptions1[j];
        trHead.appendChild(th);
      }
      thead.appendChild(trHead);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
          const td = document.createElement('td');
          if (j === 0) {
            td.textContent = i + 1;
          } else if (j === 1) {
            td.textContent = courses[i];
          } else if (j === 2) {
            td.textContent = studentNumber[i];
          } else if (j === 3) {
            td.textContent = remarks[i];
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      container.appendChild(table);
    });
  }

  // Bar chart creation
  const updateChartButton = document.getElementById('updateChartButton');
  if (updateChartButton) {
    updateChartButton.addEventListener('click', function () {
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      };
      createOrUpdateBarChart(data);
    });
  }

  // Pie chart creation
  const createTableBtnForPieChart = document.getElementById('createTableBtn');
  if (createTableBtnForPieChart) {
    createTableBtnForPieChart.addEventListener('click', function () {
      const ctx = document.getElementById('myPieChart').getContext('2d');
      const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Cohort 16', 'Cohort 19', 'Cohort 31'],
          datasets: [{
            label: 'No of Cohorts',
            data: [4, 2, 2],
            backgroundColor: [
              'rgba(0, 255, 0, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Cohorts with Number of Students'
            }
          }
        }
      });
    });
  }
});

// Function to create or update the bar chart
function createOrUpdateBarChart(data) {
  if (myBarChart) {
    myBarChart.destroy();
  }

  const ctx = document.getElementById('myBarChart').getContext('2d');
  myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
