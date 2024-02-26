var typed = new Typed(".auto-type", {
    strings: [  "Web Developer", "Web Master", "Web Designer","Web Expert"],
    typeSpeed: 60,
    loop: true
  });




  let SideBarBody = document.getElementById('mainSideBar');

  function openSideBar() {
    SideBarBody.classList.toggle('visibleSideBar');
   
  }
