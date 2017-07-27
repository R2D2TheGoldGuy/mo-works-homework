$(document).ready(function() {
  
  $("#search").submit(function(event) {
    
    event.preventDefault();
    // Variables - They will be the 3 arguments for the ajax method.
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; // XML Version: https://api.flickr.com/services/feeds/photos_public.gne
    
    var inputValue = document.getElementById("searchValue").value;
    var APIsettings = {
      tags: inputValue,
      format: "json"
    }
    
    function callbackFunction(data) { // Generate HTML with server response data
      var generatedHTML = '<ul class="gallery-photos">';
      // items property is referencing the "key" in the url
      // loop each item in the array with the .each() method
      $.each(data.items, function (i, item) { // $.each(json array, function(i, item)
        generatedHTML += '<li class="photo-item">';
        generatedHTML += '<a target="_blank" href="' + item.link + '">';
        generatedHTML += '<img class="photo" src="' + item.media.m + '"></a></li>';
      });
      generatedHTML += '</ul>';
      $("#gallery").html(generatedHTML);
    };
    
    $.getJSON(url, APIsettings, callbackFunction);
    
    /* 
      // Store the tag as a variable with the method text();
      var category = $(this).text(); // Gets the text of the html element and converts it and returns it as a string for you to manipulate.
      // $(this) keyword is very dynamic and relative because its referring to which button the user clicks on. The category names suits the tags the server will search for.
      var settings = { // These properties are real names specified in the Flickr API documentation
        tags: category,
        format: "json";
      };
    
    
    var callbackFunction = function(data) {
      
    };
    
    // AJAX
    $.ajax(url, settings, callbackFunction); // (url, object settings, callback function)
    
      // Parse the json to real JavaScript
    
      // loop each item in the array with the .each() method */
  });
  
  // CATEGORIES PAGE
  /* var categories = document.querySelector(".category-item");
  var categoryButton = document.querySelector(".category-item-button");
  
  categories.addEventListener('click', function(event) { // Parent
    
    if (event.target.tagName == 'A') {
      categoryButton.removeClass("selected");
      event.target.addClass("selected");
    }
    
  }); */
  
  $(".category-item-button").click(function() {
    
    $(".category-item-button").removeClass("selected");
    $(this).addClass("selected");
    
    // Variables - They will be the 3 arguments for the ajax method.
    // XML Version: https://api.flickr.com/services/feeds/photos_public.gne 
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; // "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
      
      // We need to send different data each time a button is clicked, the server needs to know which tag or information to return when user clicks a button.
      var category = $(this).text(); // Gets the text of the html element and converts it and returns it as a string for you to manipulate.
      // $(this) keyword is very dynamic and relative because its referring to which button the user clicks on. The category names suits the tags the server will search for.
      // In this case, each time the user clicks on a mountain, tree, or beach button, the server must send that specific response.
      var APIsettings = { // These properties are real names specified in the Flickr API documentation
        tags: category,
        format: "json"
      };
    
    function callbackFunction(data) { // Generate HTML with server response data
      var generatedHTML = '<ul class="gallery-photos">';
      // items property is referencing the "key" in the url
      // loop each item in the array with the .each() method
      $.each(data.items, function (i, item) { // $.each(json array, function(i, item)
        generatedHTML += '<li class="photo-item">';
        generatedHTML += '<a target="_blank" href="' + item.link + '">';
        generatedHTML += '<img class="photo" src="' + item.media.m + '"></a></li>';
      });
      generatedHTML += '</ul>';
      $("#gallery").html(generatedHTML);
    };
    
    // AJAX
    $.getJSON(url, APIsettings, callbackFunction); // $.getJSON is for external APIs, and $.ajax is for your own web server
    
    // $.ajax(url, APIsettings, callbackFunction); // (url, object settings, callback function)
    
      // Parse the json to real JavaScript
    
  });

});