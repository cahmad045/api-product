$(function () {
  getData();

});

function getData() {
  console.log("event runs");

  $.ajax({
    url: "",
    method: "GET",
    success: function (response) {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        
      }
    },
  });
}

// function postdata() {
//   console.log("postdata Hits");
  
//   $.ajax({
//     url: "",
//     method: "POST",
//     datatype:JSON,
//     success: function (msg) {
//       console.log(msg);
//     },
//   });
// }

// function show(){

//   let display = $("#display");
//   display.empty();
//   display.append(
//     `<div class="itemList"><h3>kas;ldk;laskd;<button type="button" class="btn btn-info button-float">Edit</button> <button type="button" class="btn btn-danger button-float" >Delete</button></h3><p>fkoajkfpoajposd</p></div>`
//   );

// }
