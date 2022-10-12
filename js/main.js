
const menuToOpenNav = document.querySelector('.menu');


if (menuToOpenNav) {
  menuToOpenNav.addEventListener('click', () => {
      document.querySelector('.links').classList.toggle('activeLinks');
      document.querySelector('.widget').classList.toggle('rotateWidget')
  });
}

const skillLabel = document.querySelectorAll('.skill h3');
const hiddenSkills = document.querySelectorAll('.hidden_skill')

const showSkills = (clicked, showed) => {
    clicked.addEventListener('click', () => {
        showed.classList.toggle('active_skill');
        clicked.children[1].classList.toggle('open_expand')
     })
}

showSkills(skillLabel[0], hiddenSkills[0]);
showSkills(skillLabel[1], hiddenSkills[1]);