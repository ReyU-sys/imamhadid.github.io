// button top
mybutton = document.getElementById("myBtn");
myabout = document.getElementById("myabout")
mysosial = document.getElementById("mysosial")
media = document.getElementById("media")
me = document.getElementById("me")
exp = document.getElementById("exp")
sos = document.getElementById("sos")
me.style.opacity = "0";
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.style.backgroundColor = "white";
    me.style.opacity = "0";
  }
  else {
  }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        document.body.style.backgroundColor = "white";
    }
    else {
        mybutton.style.display = "none";
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myabout.style.opacity = "0";
        exp.style.opacity = "1";
        me.style.opacity = "0";
            
    }
    else {
        myabout.style.opacity = "1";
        mysosial.style.opacity = "0";
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.body.style.backgroundColor = "whitesmoke"; 
        mysosial.style.opacity = "1";
        me.style.opacity = "1";
        exp.style.opacity = "0";
    }
    else {
    }
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.body.style.backgroundColor = "whitesmoke";    
        
    }
    else {

    }
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        mysosial.style.opacity = "0";
        exp.style.opacity = "1";
        media.style.opacity = "0";
        sos.style.opacity = "1";
        document.body.style.backgroundColor = "gray";
    }
    else {
        // mysosial.style.opacity = "1";
    }
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        media.style.opacity = "1";
        sos.style.opacity = "0";
        document.body.style.backgroundColor = "gray";
    }
    else {
        
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// scrollevent

// time
$(document).ready(function(){
    function clock() {
      var now = new Date();
      var secs = ('0' + now.getSeconds()).slice(-2);
      var mins = ('0' + now.getMinutes()).slice(-2);
      var hr = now.getHours();
      var Time = hr + ":" + mins + ":" + secs;
      document.getElementById("watch").innerHTML = Time;
      requestAnimationFrame(clock);
    }
    requestAnimationFrame(clock);
});

// $(window).scroll(function() {
//     $('section').each(function(i) {
//       if ($(this).position().top <= $(window).scrollTop()) {
//         $('body').css('background-color', $(this).attr('data-color'));
//       }
//     });
//   });

