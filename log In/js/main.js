$(document).ready(function(){
$('#main').find('p').addClass('super');
console.log($('.submenu a').first().text());
console.log($('.submenu a').last().text());
  $(document).on('contextmenu',function(){
    return false;
  });

  $(document).on('mousedown',function(i){
    i.preventDefault();
    console.log(i.which);

  if(i.which == 3){
    $('.hidden').removeClass('shown');
    if($(i.target).is('img'))
    {
      $('.saveimg, .newtab').addClass('shown');
    }
    else if($(i.target).is('a')){
      $('.newtab').addClass('shown');
    }

    console.log(i.pageX,i.pageY);

    $("#context").css({
      top: i.pageY,
      left: i.pageX
    });

    $("#context").fadeIn();
    return false;
  }
    $("#context").fadeOut();
  });
  $('[href = "https://www.instagram.com/"]').on('click',function(event){
    console.log("got into insta");
    event.preventDefault();
  });
  $('[data-trigger="dropdown"]').on('mouseenter',function(){
    var submenu = $(this).parent() .find('.submenu');
  /*submenu.addClass('active');*/
   submenu.fadeIn(800);
  $('.profile-menu').on('mouseleave',function(){
    /*submenu.removeClass('active');*/
    submenu.fadeOut(800);
    });
});

  $('#append, #prepend, #replace').on('click',function(e){
  e.preventDefault();
 var el = $(e.currentTarget);
   var get = el.attr('Id');
    var content = $('.your-text').val()
    if( get == "append"){
      console.log("appending...");
      $('#main').append(content);
    }
    else if(get =="prepend"){
      console.log("prepending...");
      $('#main').prepend('<a href = "#">' + content + '</a>');
    }
    else if(get =="replace"){
      console.log("replacing...");
      $('#main').html(content);
    }
    $('.your-text').val("");
  });
  $('textarea').focusin(function(){
    console.log("focused in brother");
    });

/*$('p:contains("pronto")').html("iam the beast and i can not be destroyed");
*/
$('p').each(function(){
  console.log($(this).text());
});

if($(':contains("pronto")').hasClass('para')){
  console.log("there is a class called para")
}else{
  console.log("sorry, there is no class");
}

    $('textarea').focusout(function(){
    console.log("focused out man");
});
    $('input').focusout(function(){
      if($(this).val().indexOf('@') > -1 && $(this) .val().indexOf('.') > -1 ){
        $('.status').html("VALID");
      }
      else{
        $('.status').html("INVALID");
      }

    });
    $('input').css({
      background: '#0ff',
      padding: '20px',
      backgroundSize:'cover'
    });
  /*  $('p').css({
      background: '#f00',
    });*/
  });
