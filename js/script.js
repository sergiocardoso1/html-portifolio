
  //menu
  const btnMobile = document.getElementById('btn-mobile');
  const btnMenu = document.getElementById('btn-menu')
  const btnMenu2 = document.getElementById('btn-menu2')
  const btnMenu3 = document.getElementById('btn-menu3')

 
  function toggleMenu(){
     const nav = document.getElementById('nav');
     nav.classList.toggle('active');
  }
 
  btnMobile.addEventListener('click', toggleMenu);
 
  btnMenu.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
 
  btnMenu2.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
 
  btnMenu3.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
