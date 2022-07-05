$(function(){













})


function displayProducts(){

    let display = $("#display");
    display.empty();

    $.ajax({
        url: "http://localhost:3000/api/products",
        method: "POST",
        data: {title, body},
        success: function(response){
          clearValues();
          loadRecipes();
    
        
        }
      })
    











}