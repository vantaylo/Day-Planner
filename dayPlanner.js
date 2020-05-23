//save, text for that event is saved in local storage

$(document).ready(function () {
  console.log("ready!");

  //are there even items in the local
  if (localStorage.length) {
    console.log("yayyy");

    //if so get the keys and values
    Object.keys(localStorage).forEach(function (key) {
      //grab text from localSt
      var textFromSt = localStorage.getItem(key);
      console.log(textFromSt);
      //save text to elements

      var selector = "#" + key;
      $(selector).text(textFromSt);
    });
  }
  var getLocalSt = localStorage.getItem("id");

  //current day displayed
  var date = new Date();
  console.log(date);

  $(".day").text(date);

  //color coded to indicate whether it is in the past, present, or future
  $(".time").each(function (currentTimeSlotIndex) {
    console.log($(this).attr("id"));

    if (parseInt($(this).attr("id"), 10) < date.getHours()) {
      $(this).css("background-color", "grey");
      console.log("color changed");
    } else if (parseInt($(this).attr("id"), 10) === date.getHours()) {
      $(this).css("background-color", "pink");
    } else {
      $(this).css("background-color", "tan");
    }
  });

  //save, text for that event is saved in local storage
  $("textarea").focusout(function () {
    console.log($(this));
    console.log("focus out");

    var events = $(this).val();
    var id = $(this).attr("id");
    var myStorage = localStorage.setItem(id, events);
  });
});
