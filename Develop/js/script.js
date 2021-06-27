var tasks = [];
var currentDate = moment().format("dddd, h:mm A");
var rightNow = moment().hour();

//displays current date in moment
$("#currentDay").append(currentDate);

//changes classes from present to past or future depending if military time is less than or greater than the ID respectively
$("textarea").each(function (index, element) {
  if ($(element).attr("id") < rightNow) {
    $(element).removeClass("present");
    $(element).addClass("past");
  } else if ($(element).attr("id") > rightNow) {
    $(element).removeClass("present");
    $(element).addClass("future");
  }
});

// save info
$(".saveBtn").on("click", function () {
  var textContent = $(this).parent().siblings("div").children()[0];
  tasks.push({
    id: $(textContent).attr("id"),
    value: $(textContent).val(),
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

//load tasks
var loadTasks = function () {
    tasksEl = JSON.parse(localStorage.getItem("tasks")) || [];
    $("textarea").each(function (index, element) {
        for (var i = 0; i < tasksEl.length; i++) {
            if($(element).attr("id") === tasksEl[i].id) {
                $(element).val(tasksEl[i].value)
            }
        }
    })
};

loadTasks();


