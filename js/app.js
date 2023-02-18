let menuBtn =  document.getElementById("menu");
        let navbar = document.querySelector(".header .nav-bar");
        menuBtn.addEventListener("click", () =>{
            menuBtn.classList.toggle("fa-times")
            navbar.classList.toggle("active")
        })
        window.onscroll = () =>{
            menuBtn.classList.remove("active");
            navbar.classList.remove("active")
        }
        



           
        

const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());

  });
  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";
  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");
  if(savedTheme){
    document.body.classList[savedTheme == "dark" ? "add" : "remove"] ("dark-theme");
    themeBtn.classList[savedIcon == "sun" ? "add" : "remove"] ("sun")

  }

const scrolltopBtn = document.querySelector(".scrollTotop-btn");
window.addEventListener("scroll", function()
  {
    scrolltopBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrolltopBtn.addEventListener("click", () =>{
      document.body.scrollTop =0;
      document.documentElement.scrollTop = 0;


  });

ScrollReveal({ 
            //reset: true,
            distance: '60px',
            duration:2500,
            delay: 100
   
        
       });
ScrollReveal().reveal('.home .info h2,.about-info h3, .section-title-01, .section-title-02', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3,  .info p, .btn, .about-info p ', {delay: 600, origin: 'right'});
       
ScrollReveal().reveal('.about-info h4 ', {delay: 500, origin: 'top', interval:400});
ScrollReveal().reveal('.icons i, .contact-left li', {delay: 500, origin: 'left', interval:200});
ScrollReveal().reveal('.home-image ', {delay: 500, origin: 'bottom', interval:200});
ScrollReveal().reveal('.contact-right ', {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.about-image ', {delay: 500, origin: 'left', interval:200});
ScrollReveal().reveal('.course-description, .contact-card, .education-list, .contact-left h2', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.education, .portfolio .image-card, .images ', {delay: 600, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer, .box-container', {delay: 500, origin: 'top', interval:200});
      
   
       
   


init_mathjax = function() {
    if (window.MathJax) {
    // MathJax loaded
        MathJax.Hub.Config({
            TeX: {
                equationNumbers: {
                autoNumber: "AMS",
                useLabelIds: true
                }
            },
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                processEscapes: true,
                processEnvironments: true
            },
            displayAlign: 'center',
            CommonHTML: {
                linebreaks: { 
                automatic: true 
                }
            }
        });
    
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}
init_mathjax();


let myname =  document.getElementById("name");
let email =  document.getElementById("email");
let phone =  document.getElementById("phone");
let subject =  document.getElementById("subject");
let message =  document.getElementById("message");
let submit =  document.getElementById("submit");
submit.addEventListener('click', ()=>{
  if (myname.value !="" && email.value!="" && phone.value!="" && subject.value!="" &&  message.value!=""){
    alert("Message successfully sent! Thank you for contacting us.");
    return true

  }
  
})