window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || documentElement.scrollTop;;
  if (scrollTop >60) {
   document.getElementById('genel').style.backgroundColor = 'white'; 
  } else {
    document.getElementById('genel').style.backgroundColor = ''; 
  }
});
var active = document.getElementById('active'); 
window.addEventListener('scroll', function() {
    var scrollY1 = window.scrollY;
    if (scrollY1>0){
       active.style.color = 'black'; 
    } else {
        active.style.color = 'white';
    }
});
var list = document.getElementById('list'); 
var liItems = list.getElementsByTagName('li'); 
window.addEventListener('scroll', function() {
    var scrollY2 = window.scrollY;
      if (scrollY2 >90) {
        list.style.color = 'black';
        for (var i = 0; i < liItems.length; i++) {
            var aElements = liItems[i].getElementsByTagName('a');
            for (var j = 0; j < aElements.length; j++) {
                aElements[j].style.color = 'black'; 
            }
        }
    } else {
        list.style.color = 'white'; 
         for (var i = 0; i < liItems.length; i++) {
            var aElements = liItems[i].getElementsByTagName('a');
            for (var j = 0; j < aElements.length; j++) {
                aElements[j].style.color = 'white'; 
            }
        }
    }
});
var logo1 = document.getElementById('logo1'); 
window.addEventListener('scroll', function() {
    var scrollY3 = window.scrollY;
    if (scrollY3 >90) {
       logo1.src = 'https://image.lexica.art/full_webp/19eece39-0860-4d78-8b5d-eea73465f4cb'; 
    } else {
       logo1.src = 'https://image.lexica.art/full_webp/88b27de0-395f-4a24-9d7b-e6c5c3e46d2f'; 
    }
});

//navbar kısmı ul
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// Sayfa aşağı kaydığında menüye tıklandığında arka plan ve yazı rengi değişimi

 window.addEventListener('scroll', function() {
  if (window.scrollY4 > 40) {
    document.body.classList.add('nav-scroll');
   
  } else {
    document.body.classList.remove('nav-scroll');
  }
});
//diğer ul kısmı
const menuToggleFooter = document.getElementById('menu-toggle-footer');
const navLinks = document.getElementById('nav-links');

menuToggleFooter.addEventListener('click', function() {
  navLinks.classList.toggle('activee');
});














