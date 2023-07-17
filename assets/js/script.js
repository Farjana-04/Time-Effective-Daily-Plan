// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var headerDate = document.querySelector("#currentDay");
//Added code to display the current date in the header of the page
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM DD YYYY'));
// $('#currentDay').moment().format('MMM D, YYYY');

let times = [9,10,11,12,13,14,15,16,17]
$(function () {
  for(let timeIndex = 9;timeIndex<=17;timeIndex++){

    let timeBlockEl =$(`#hour-${timeIndex}`)
    console.log(timeBlockEl)
   
    let buttonEl =timeBlockEl.children(".saveBtn")
   
    buttonEl.on("click",clickSave)
    //Get current number of hours
    let timeText = localStorage.getItem(`hour-${timeIndex}`)
    let textAreaEl = timeBlockEl.children(".description")
    console.log(timeText)
    textAreaEl.val(timeText)

    //if timeBlockHour is same as curent real-time hour
    // set the class to present
  }


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

// let clickSave = (e)=>{

//  let clickedBtn =$(e.currentTarget)
//   let timeBlockEl =clickedBtn.parent()
//   let hourEl =timeBlockEl.children(".hour")
//   let textAreaEl =timeBlockEl.children(".description")
//   console.log(timeBlockEl.attr("id"))
//   console.log(textAreaEl.val())
// }



