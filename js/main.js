const aboutSection = document.getElementById('about');
const loadAbout = document.getElementById('loadAbout');
const skillsSection = document.getElementById('skills');
const loadSkills = document.getElementById('loadSkills');
const loadServices = document.getElementById('loadServices');
const servicesSection = document.getElementById('services');
const loadAwards = document.getElementById('loadAwards');
const awardsSection = document.getElementById('awards');
const aboutsubsec = document.querySelectorAll('.about_sub_con');
const tabs = document.querySelectorAll('.tab');
aboutSection.style.display = 'block';
loadAbout.classList.add('active');

const sectionLoader = (clickedElem, loadElem) => {
  clickedElem.addEventListener('click', () => {
    tabs.forEach((tab) => {
      if (tab == clickedElem) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
    aboutsubsec.forEach((element) => {
      if (element == loadElem) {
        loadElem.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  });
};

sectionLoader(loadAbout, aboutSection);
sectionLoader(loadSkills, skillsSection);
sectionLoader(loadAwards, awardsSection);
sectionLoader(loadServices, servicesSection);

const skillPercent = document.querySelectorAll('.skillPercent');
const bars = document.querySelectorAll('.progressbar');

const barProgressor = () => {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.width = skillPercent[i].innerHTML;
  }
};

barProgressor();

const openNavMenu = () => {
  const burger = document.querySelector('.burger');
  let isOpen = false;
  burger.addEventListener('click', () => {
    if (!isOpen) {
      document.querySelector('.nav').style.display = 'flex';
      isOpen = true;
    } else {
      document.querySelector('.nav').style.display = 'none';
      isOpen = false;
    }
  });
};

openNavMenu();

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
