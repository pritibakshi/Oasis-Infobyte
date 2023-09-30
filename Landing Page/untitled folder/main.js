const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  var typed = new Typed(".typing", {
    strings:["EduAhead"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});


// document.getElementById("1").waypoint(function() {
//     increment(1, 87);
//   }, {offset: '75%'});

//   function increment(elem, finalVal) {
//     var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
//     if (currVal < finalVal) {
//       currVal++;
//       document.getElementById(elem).innerHTML = currVal + "%";
  
//       setTimeout(function() {
//         increment(elem, finalVal);
//       }, 40)
//     }
//   };