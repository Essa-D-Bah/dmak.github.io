
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

function sendMail() {
  let params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_kp9uqj6', 'template_g4zn0cs', params).then((res) => {
    alert('Success! ' + res.status);
  });
}