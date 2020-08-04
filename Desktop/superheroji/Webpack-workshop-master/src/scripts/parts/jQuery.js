/**
 * Bootstrapping
 * jQuery usage
 */
// Import jQuery
import $ from 'jquery';



let random =  Math.floor((Math.random()*731) + 1);
let url =  `http://gql.devtvornica.org/cors.php?url=https://superheroapi.com/api/3389585741075876/`;
$.getJSON( url + random , function( data ) {   
  
  var html= "";
    $.each(data.image,function(k,v){
      html += '<div class="active1"><img src="'+data.image[k]+'" /></div>';
      html += '<p class="">' + data.name+'</p>';
    })
$('.hero-card').append(html);

  var html= "";
    $.each(data.image,function(k,v){
      html += '<div class="active1"><img src="'+data.image[k]+'" /></div>';
})
$('.hero-row').append(html);
})


for (let i = 0; i < 9; i++) {
let random =  Math.floor((Math.random()*731) + 1);
let url =  `http://gql.devtvornica.org/cors.php?url=https://superheroapi.com/api/3389585741075876/`;
$.getJSON( url + random , function( data ) {

  var html= "";
    $.each(data.image,function(k,v){
    html += '<div class="active"><img src="'+data.image[k]+'" /></div>';
      html += '<p class="">' + data.name+'</p>';
    })
$('.hero-card').append(html);


    var html= "";
      $.each(data.image,function(k,v){
      html += '<div class="active"><img src="'+data.image[k]+'" /></div>';
})
$('.hero-row').append(html);
}); }





$(document).ready(function(){
  $('.button2').on('click', function(){
    var currentImg = $('.active1');
    var nextImg = currentImg.next();

    if(nextImg.length) {
      currentImg.removeClass('active1').css('z-index', -0);
      nextImg.addClass('active1').css('z-index', 0);
    }
  })
})

$(document).ready(function(){
  $('.button1').on('click', function(){
    var currentImg = $('.active1');
    var prevImg = currentImg.prev();

    if(prevImg.length) {
      currentImg.removeClass('active1').css('z-index', -200);
      prevImg.addClass('active1').css('z-index', 200);
    }
  })
})












