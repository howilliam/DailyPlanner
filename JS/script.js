// Display the current day
var currentDayEl = $("#currentDay");
currentDayEl.text(dayjs().format('dddd, MMMM D, YYYY'));

// Add event listener for save button
$(".saveBtn").on("click", function () {
    var hour = $(this).siblings("textarea").data("time");
    var eventText = $(this).siblings("textarea").val();
  
    // Save to local storage
    localStorage.setItem(hour, eventText);
  });