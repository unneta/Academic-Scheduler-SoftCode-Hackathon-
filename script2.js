// script2.js

// Get modal element
var modal = document.getElementById("reminder-modal");

// Get open modal button
var openModalBtn = document.getElementById("open-modal-btn");

// Get close button
var closeModalBtn = document.getElementsByClassName("close")[0];

// Open modal
function openModal() {
  modal.style.display = "block";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicked outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get reminder form
var reminderForm = document.getElementById("reminder-form");

// Handle form submission
reminderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Get form values
  var reminderTitle = document.getElementById("reminder-title").value;
  var reminderDescription = document.getElementById("reminder-description").value;
  var reminderDatetime = document.getElementById("reminder-datetime").value;
  
  // Do something with the form data (e.g., save to a database, display a message)
  console.log("Reminder Title: " + reminderTitle);
  console.log("Reminder Description: " + reminderDescription);
  console.log("Reminder Datetime: " + reminderDatetime);
  
  // Clear form fields
  reminderForm.reset();
  
  // Close modal
  closeModal();
});

// Highlight.js initialization
document.addEventListener("DOMContentLoaded", function () {
  var codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach(function (codeBlock) {
    hljs.highlightBlock(codeBlock);
  });
});

var reminders = [];

// Function to open modal
function openModal() {
  $('#reminder-modal').modal('show');
}

// Function to close modal
function closeModal() {
  $('#reminder-modal').modal('hide');
}

// Function to save reminder
function saveReminder() {
  var reminderTitle = $('#reminder-title').val();
  var reminderDescription = $('#reminder-description').val();
  var reminderDatetime = $('#reminder-datetime').val();

  // Create a reminder object
  var reminder = {
    title: reminderTitle,
    description: reminderDescription,
    datetime: reminderDatetime
  };

  // Add the reminder to the array
  reminders.push(reminder);

  // Clear form fields
  $('#reminder-form')[0].reset();

  // Close modal
  closeModal();

  // Update calendar display
  displayCalendar();
}

// Function to display the calendar
function saveReminder() {
    var reminderTitle = $('#reminder-title').val();
    var reminderDescription = $('#reminder-description').val();
    var reminderDatetime = $('#reminder-datetime').val();
  
    // Create a reminder object
    var reminder = {
      title: reminderTitle,
      description: reminderDescription,
      datetime: reminderDatetime
    };
  
    // Add the reminder to the array
    reminders.push(reminder);
  
    // Clear form fields
    $('#reminder-form')[0].reset();
  
    // Close modal
    closeModal();
  
    // Update calendar display
    displayCalendar();
  }
  
  // Function to display the calendar
  function displayCalendar(month, year) {
    var calendar = $('#calendar');
    calendar.empty();
  
    // Get current date or specified date
    var currentDate;
    if (month === undefined || year === undefined) {
      currentDate = new Date();
    } else {
      currentDate = new Date(year, month, 1);
    }
  
    // Get the first day of the current month
    var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  
    // Get the last day of the current month
    var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
    // Get the total number of days in the current month
    var totalDays = lastDay.getDate();
  
    // Get the day index of the first day (0 - Sunday, 1 - Monday, etc.)
    var firstDayIndex = firstDay.getDay();
  
    // Create month header
    var monthHeader = $('<div class="col-12 month-header"></div>').text(
      new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate)
    );
    calendar.append(monthHeader);
  
    // Create day elements for the calendar
    for (var i = 0; i < totalDays + firstDayIndex; i++) {
      var day = $('<div class="col day"></div>');
  
      // Calculate the day number
      var dayNumber = i - firstDayIndex + 1;
  
      if (i >= firstDayIndex && dayNumber <= totalDays) {
        day.text(dayNumber);
  
        // Check if there are reminders for the current day
        var dayReminders = reminders.filter(function (reminder) {
          var reminderDate = new Date(reminder.datetime);
          return (
            reminderDate.getDate() === dayNumber &&
            reminderDate.getMonth() === currentDate.getMonth() &&
            reminderDate.getFullYear() === currentDate.getFullYear()
          );
        });
  
        // Display reminders for the current day
        dayReminders.forEach(function (reminder) {
          var reminderElement = $('<div class="reminder"></div>').text(reminder.title);
          day.append(reminderElement);
        });
  
        // Add event listener to open modal when clicking on a day
        day.click(openModal);
      }
  
      calendar.append(day);
    }
  }
  
// Add event listener to close modal button
$('.modal').on('hidden.bs.modal', closeModal);

// Add event listener to save reminder button
$('#reminder-form').submit(function (e) {
  e.preventDefault();
  saveReminder();
});

// Add event listener to month and year dropdown
$('.dropdown-item').click(function (e) {
    var selectedMonth = Number($(this).attr('data-value'));
    var selectedYear = new Date().getFullYear();
    displayCalendar(selectedMonth, selectedYear);
  });

  $('#monthYearDropdown').click(function (e) {
    e.preventDefault();
    
    $(this).next('.dropdown-menu').toggleClass('show');
  });
  
  
// Initial calendar display
displayCalendar();
