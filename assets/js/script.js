

//Added code to display the current date in the header of the page
let currentDate = dayjs();
    $("#currentDay").text(currentDate.format('dddd, MMM DD YYYY'));


let times = [9,10,11,12,13,14,15,16,17]
$(function () {
  for(let timeIndex = 9; timeIndex<=17; timeIndex++){

    let timeBlockEl =$(`#hour-${timeIndex}`)
    // console.log(timeBlockEl)
   
    let buttonEl =timeBlockEl.children(".saveBtn")
   // used on() instead of event listener for click events on the save button
    buttonEl.on("click",clickSave)

    //Get current number of hours
     let timeText = localStorage.getItem(`hour-${timeIndex}`)
    let textAreaEl = timeBlockEl.children(".description")
      // console.log(timeText)
     textAreaEl.val(timeText)

  }
    
  //function to check each hour block to style different time blocks according to their status: past, present, or future. 
 let currentHour = dayjs().hour();
 $(".time-block").each(function () {    //selects all elements with the class "time-block" and iterates over each of them using the .each() method.
  var blockHourId = parseInt($(this).attr("id").split("hour-")[1]);
  //  console.log(currentHour)
  //  console.log(blockHourId)
  if (blockHourId === currentHour) {
    $(this).next().addClass("present");
    $(this).next().removeClass("past");
    $(this).next().removeClass("future");

  } else if (blockHourId < currentHour) {
    $(this).next().removeClass("present");
    $(this).next().addClass("past");
    $(this).next().removeClass("future");
    
  } else if (blockHourId > currentHour) {
    $(this).next().removeClass("present");
    $(this).next().removeClass("past");
    $(this).next().addClass("future");
  }
});
 
});

let clickSave = (e)=>{

  let clickedBtn =$(e.currentTarget)
  let timeBlockEl =clickedBtn.parent()
  let hourEl =timeBlockEl.children(".hour")
  let textAreaEl =timeBlockEl.children(".description")
  
// Get the value from the textarea and save it to localStorage
let timeIndex = timeBlockEl.attr("id").replace("hour-", "");
let dataToSave = textAreaEl.val();
localStorage.setItem(`hour-${timeIndex}`, dataToSave);
};




