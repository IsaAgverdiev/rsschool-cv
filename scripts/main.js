const projectModalBtnClose = document.querySelector('.project-modal__btn');
const projectBody = document.querySelector('.project-modal__body');

const girdProjects = document.querySelector('.projects__grid');
const projectModal = document.querySelector('.project-modal');
const projectModalInner = document.querySelector('.project-modal__inner');
const mainProjects = document.querySelectorAll('.project');

function disableScroll() {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px
  `;
}
function enableScroll() {
  document.body.style.cssText = ``;
  window.scroll({ top: document.body.dbScrollY });
}

const projects = {
  PureBank: {
    title: 'PureBank',
    URL: 'https://isaagverdiev.github.io/PureBank/',
    repositories: 'https://github.com/IsaAgverdiev/PureBank',
    discr: 'Bank landing page, for the sale of a debit card',
    work: [
      'Design layout developed',
      'Complited valid, adaptive code',
      'A mortage, loan, deposite calculator has been written',
      'Working with API adding the exchange rate to the site',
      'Card registration form',
    ],
    tools: ['Html', 'Css', 'Scss', 'Gulp', 'JavaScript', 'Git', 'npm', 'Vanilla-tilt'],
    status: 'in progress',
  },
  Shirogo: {
    title: 'Shirogo',
    URL: 'https://isaagverdiev.github.io/Shirogo/',
    repositories: 'https://github.com/IsaAgverdiev/Shirogo',
    discr:
      'Multi-page site for streamers on Twitch for introducing event statistics and information on stream',
    work: [
      'Design layout has been developed and 4 pages with two modal windows are laid out',
      'Complited semantic, valid, adaptive layout',
      'Written a script of two related selects',
      'A script of custom radio buttons is written',
    ],
    tools: ['Html', 'Css', 'Scss', 'Gulp', 'JavaScript', 'Git', 'npm', 'jQuery', 'Slick-slider'],
    status: 'complited',
  },
  MyOffice: {
    title: 'MyOffice',
    URL: 'https://isaagverdiev.github.io/MyOffice/',
    repositories: 'https://github.com/IsaAgverdiev/MyOffice',
    discr:
      'Landing page for a company that leases and sells offices in the business center on Tulskaya',
    work: [
      'Design developed',
      'Complited semantic, adaptive, cross-browser layout',
      'Connection a feedback popup using the Magnific Popup plugin',
      'Create a script for the burger menu',
      'Smooth scrolling to the block',
    ],
    tools: ['Html', 'Css', 'Scss', 'Gulp', 'JavaScript', 'Git', 'Magnific Popup'],
    status: 'comlited',
  },

  Desire: {
    title: 'Desire',
    URL: 'https://isaagverdiev.github.io/Desire/',
    repositories: 'https://github.com/IsaAgverdiev/Desire',
    discr: 'Multi-page website for designer furniture',
    work: [
      'A valid, cross-browser layout of 6 pages was done',
      'Adaptive layout based om media queries on moblile screens',
      'Connection and configuring plugins slick-sloder, fancybox, mixitup',
      'mabe burger menu',
    ],
    tools: [
      'Html',
      'Css',
      'Scss',
      'Gulp',
      'JavaScript',
      'Git',
      'jQuery',
      'slick-slider',
      'fancybox',
      'mixitup',
    ],
    status: 'comlited',
  },
  KoreaCrem: {
    title: 'React',
    URL: 'isaagverdiev.github.io/react-fund/',
    repositories: 'https://github.com/IsaAgverdiev/react-fund',
    discr: 'learning the basics of react',
    work: [
      'Working with the server. Axios',
      'Paginated output, Pagination',
      'Dynamic pagination. Endless tape',
      'Creating your own UI components',
      'Implementation of sorting, searching, filtering',
      'Using the useState, useEffect, useRef, useContext hooks',
      'Creating your own custom hooks',
    ],
    tools: ['React', 'Axios'],
    status: 'comlited',
  },
};

function openModal() {
  projectModal.style.display = 'flex';
  disableScroll();
}
function closeModal() {
  projectModal.style.display = 'none';
  enableScroll();
}

if (projectModalBtnClose) {
  projectModalBtnClose.addEventListener('click', closeModal);
}

projectModal.addEventListener('click', e => {
  let target = e.target;
  if (target.matches('.project-modal')) {
    closeModal();
    enableScroll();
  }
});

function getModal(e) {
  let target = e.target.closest('.btn-project');
  let targetName = target.getAttribute('data-name');

  switch (targetName) {
    case 'PureBank':
      createModal('PureBank');
      openModal();
      break;
    case 'Shirogo':
      createModal('Shirogo');
      openModal();
      break;
    case 'MyOffice':
      createModal('MyOffice');
      openModal();
      break;
    case 'ResumeWebsite':
      createModal('ResumeWebsite');
      openModal();
      break;
    case 'Desire':
      createModal('Desire');
      openModal();
      break;
    case 'KoreaCrem':
      createModal('KoreaCrem');
      openModal();
      break;
  }
}

function createModal(WebsiteName) {
  let workList = projects[WebsiteName].work;
  let toolsList = projects[WebsiteName].tools;

  let templates = `
      <h1 class="project-modal__title">${projects[WebsiteName].title}</h1>
      <span class="project-modal__status">status: ${projects[WebsiteName].status}</span>
      <div class="project-modal__links">
        <a class="project-modal__link project-modal__website" href=${
          projects[WebsiteName].URL
        } target="_blank">Site</a>
        <a class="project-modal__link project-modal__code" href=${
          projects[WebsiteName].repositories
        } target="_blank">Code</a>
      </div>
      <p class="project-modal__discr">${projects[WebsiteName].discr}</p>
      <div class="project-modal__work">
        <h2 class="project-modal__work-title">Completed tasks:</h2>
        ${`<ul class="project-modal__work-list">${workList
          .map(i => `<li class="project-modal__work-item">${i}</li>`)
          .join('')}</ul>`}
      </div>
      <div class="project-modal__tools">
        <h2 class="project-modal__tools-title">Stack and tools</h2>
        ${`<ul class="project-modal__tools-list">${toolsList
          .map(i => `<li class="project-modal__tools-item">${i}</li>`)
          .join('')}</ul>`}
      </div>
      `;

  projectModalInner.innerHTML = templates;
}

if (girdProjects) {
  girdProjects.addEventListener('click', getModal);
}

mainProjects.forEach(i => {
  i.addEventListener('click', e => {
    getModal(e);
  });
});


let openMenuBtn = document.querySelector('.btn-burger');
let overlayMenu = document.querySelector('.overlay-menu');
let menu = document.querySelector('.header__menu');
let body = document.body;

openMenuBtn.addEventListener('mousedown', showRightMenu);

if (document.documentElement.clientWidth > 767) {
  enableScroll();
}

function showRightMenu() {
  disableScroll();
  openMenuBtn.classList.toggle('btn-burger--clouse');
  menu.classList.toggle('hide-menu');
  overlayMenu.classList.toggle('hide');
  if (overlayMenu.classList.contains('hide')) {
    enableScroll();
  }
}
