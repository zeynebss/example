// How to create accordion menu
// var btn=document.getElementsByClassName("accordion");
// var i;
// for( i=0;i < btn.length; i++){
//     btn[i].addEventListener("click",function() {
//         this.classList.toggle("active");
//         var panel=this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight=null;  
//         }
//         else{
//             panel.style.maxHeight=panel.scrollHeight+"px";
//         }
//     });



// }
//  var btn=document.getElementsByClassName("accordion");
//  var i;
//  for(i=0;i<btn.length;i++){
//      btn[i].addEventListener("click",function(){
//          this.classList.toggle("active")
//          var panel=this.nextElementSibling;
//          if (panel.style.maxHeight) {
//              panel.style.maxHeight=null;
//          }
//          else{
//              panel.style.maxHeight=panel.scrollHeight+"px";
//          }
//      })
//  }

// var btn=document.getElementsByClassName("accordion");
// var i;
// for(i=0;i<btn.length;i++){
//     btn[i].addEventListener("click",function(){
//         this.classList.toggle("active");
//         var panel=this.nextElementSibling;
//         if (panel.style.maxHeight) {
//            panel.style.maxHeight=null; 
//         }
//         else{
//             panel.style.maxHeight=panel.scrollHeight+"px";
//         }
//     })
// }


// var btn=document.getElementsByClassName("accordion");
// var i;
//  for(i=0;i<btn.length;i++){
//      btn[i].addEventListener("click",function(){
//         this.classList.toggle("active");
//          var panel=this.nextElementSibling;
//          if(panel.style.maxHeight){
//              panel.style.maxHeight=null;
//          }
//          else{
//              panel.style.maxHeight=panel.scrollHeight+"px";
//          }
//      })
//  };

//  How to create tab menu
//  tablinks=document.getElementsByClassName("tablinks");
//  tabcontent=document.getElementsByClassName("tabcontent");
//  var i, tablinks,tabcontent;

//  function openContent(evt,contentName){
//      for(i=0;i<tabcontent.length;i++){
// tabcontent.style.display="none";
//      }
//      for(i=0;i<tablinks.length;i++){
//          tablinks[i].classList=tablinks[i].classList.replace(" active","");
//      }
//      document.getElementsById(contentName).style.display="block";
//      evt.currentTarget.classList+=" active";
//  };
//  document.getElementById("defaultOpen").click();
 
// var slideIndex=0;
// showSlide();
//  function showSlide(){
//      var i;
//      var slides=document.getElementsByClassName("mySlides");
//      var dots=document.getElementsByClassName("dot");
//      for(i=0;i<slides.length;i++){
//          slides[i].style.display="none";

//      }
//      slideIndex++;
//      if(slideIndex>slides.length)
//      {slideIndex=1}
//      for(i=0;i<dots.length;i++){
//          dots[i].className=dots[i].className.replace(" active","");
//      }
//      slides[slideIndex-1].style.display="block";
//      dots[slideIndex-1].className +=" active";
//      setTimeout(showSlide,2000)
//  }