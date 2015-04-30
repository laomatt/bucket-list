$(document).on("page:change", function(){

  $('body').on('click', '.list-title', function(e){
    e.preventDefault();
    $.ajax({
      url: '/lists/'+$(this).attr('href'),
    })
    .done(function(data) {
      console.log("success");
      console.log(data)

      var context = { item: data.items };
      var source = $('#item-template').html();
      var template = Handlebars.compile(source);
      var html = template(context);
      var html2="<div class='item add-item'><a class='add-button' href='#'>Add item to this list</a></div>"+html
      document.getElementById("current-list").innerHTML = html2;
      document.getElementById("list-title").innerHTML = data.title;
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  })

// $('body').on('click', '.delete-button', function(e){
//     e.preventDefault();
//     $.ajax({
//       url: '/items/'+$(this).attr('action'),
//       type: 'DELETE'
//     })
//     .done(function(data) {
//       console.log("success");
//       console.log(data)

//       var context = { item: data.items };
//       var source = $('#item-template').html();
//       var template = Handlebars.compile(source);
//       var html = template(context);
//       var html2="<div class='item add-item'><a class='add-button' href='#'>Add item to this list</a></div>"+html
//       document.getElementById("current-list").innerHTML = html2;
//       document.getElementById("list-title").innerHTML = data.title;
//     })
//     .fail(function() {
//       console.log("error");
//     })
//     .always(function() {
//       console.log("complete");
//     });

//   })



  $('body').on('click','.accomplished-button', function(e){
    e.preventDefault()
    $.ajax({
      url: '/items/check/'+$(this).attr('action'),
      type: 'POST',
      data: {done: document.getElementById("item"+$(this).attr('action')).className}
    })
    .done(function(data) {
      if(data.done==true){
        document.getElementById("item"+data.id).className=data.class_name
        document.getElementById("accomplish"+data.id).innerHTML="---Not yet---"
      }
      else{
        document.getElementById("item"+data.id).className=data.class_name
        document.getElementById("accomplish"+data.id).innerHTML="accomplished"

      }
      console.log(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  })

})

// function turn(list){
// document.getElementById("#current-list").innerHTML=
// }

