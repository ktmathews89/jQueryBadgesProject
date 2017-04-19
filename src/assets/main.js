$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/ktmathews.json',{
      dataType: 'jsonp',
      success: function (response){
          console.log('inside the success');
          var completed = response.courses.completed;
          console.log(completed);
          for (i = 0; i < completed.length; i++){
              var course = completed[i];
              var htmlString = '<div class="course">'+
                '<h3>' + course.title + '</h3>' +
                '<img src="' + course.badge + '" />' +
                '<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>' +
                '</div>';

              $('#badges').append(htmlString);
          }
      }
  });

});
