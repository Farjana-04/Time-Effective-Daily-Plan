// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Added code to display the current date in the header of the page
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMM DD YYYY'));
// $('#currentDay').moment().format('MMM D, YYYY');

let times = [9,10,11,12,13,14,15,16,17]
$(function () {
  for(let timeIndex = 9; timeIndex<=17; timeIndex++){

    let timeBlockEl =$(`#hour-${timeIndex}`)
    // console.log(timeBlockEl)
   
    let buttonEl =timeBlockEl.children(".saveBtn")
   // used on() instead of event listener for click events on the save button
    buttonEl.on("click",clickSave)

    //Get current number of hours
     let timeText = localStorage.getItem(`time-${timeIndex}`)
    let textAreaEl = timeBlockEl.children(".description")
      console.log(timeText)
     textAreaEl.val(timeText)
  }
    //if timeBlockHour is same as curent real-time hour
    // set the class to present
    

//function to check each hour block to style different time blocks according to their status: past, present, or future. 
let currentHour = dayjs().hour();
$(".time-block").each(function () {    //selects all elements with the class "time-block" and iterates over each of them using the .each() method.
  var blockHourId = parseInt($(this).attr("id").split("hour")[1]);

  if (blockHourId === currentHour) {
    $(this).next().addClass("present");
  } else if (blockHourId < currentHour) {
    $(this).next().addClass("past");
  } else if (blockHourId > currentHour) {
    $(this).next().addClass("future");
  }
});
  
  // Save data in local storage
  // Get nearby values of the description in JQuery
  // var textAreaEl = $(this).children(".description").val();
  // var timeBlockEl = $(this).parent().attr("id");

// Save text in local storage
   let timeText = localStorage.setItem(`hour-${timeIndex}`)
   let textAreaEl = timeBlockEl.children(".description")
    localStorage.setItem(timeText, textAreaEl);
  
  

  // console.log(timeTextSave)
  // let textAreaEl = timeBlockEl.children(".description")
  // console.log(timeText)
  // textAreaEl.val(timeText)
  // console.log(localStorage.getItem());


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

let clickSave = (e)=>{

 let clickedBtn =$(e.currentTarget)
 console.log(e.currentTarget)
  let timeBlockEl =clickedBtn.parent()
  let hourEl =timeBlockEl.children(".hour")
  let textAreaEl =timeBlockEl.children(".description")
  console.log(timeBlockEl.attr("id"))
  console.log(textAreaEl.val())
}



