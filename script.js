const portfolioItems = [
  { title: "Kinderszenen No. 1 by Robert Schumann", type: "video", src: "https://www.youtube.com/embed/G1UuLzHcf3Q", date: "2022" },
  { title: "Lieder Ohne Worte No. 9 by Felix Mendelssohn", type: "video", src: "https://www.youtube.com/embed/OWuOxtF7M-8", date: "2022" },
  { title: "Where is My Mind by The Pixies", type: "video", src: "https://www.youtube.com/embed/zTA1GIYrMXc", date: "2022" },
  { title: "Mr Moore's Meme Magic (Part 2)", type: "video", src: "https://www.youtube.com/embed/OyddIJCafRc", date: "2021" },
  { title: "Mr Moore's Meme Magic (Part 1)", type: "video", src: "https://www.youtube.com/embed/7X0S1sfkMXE", date: "2021" },
  { title: "Rachmaninoff - Prelude no 2 op 3", type: "video", src: "https://www.youtube.com/embed/hNH1KThNgKY", date: "2021" },
  { title: "Orange Juice advert (CG demo film)", type: "video", src: "https://www.youtube.com/embed/pVvFlTVmRbU", date: "2020" },
  { title: "Fermi's Promise (CG demo film)", type: "video", src: "https://www.youtube.com/embed/69781gBoQQk", date: "2019" },
  { title: "The Edge of Andromeda (CG demo film)", type: "video", src: "https://www.youtube.com/embed/HlMNmPMCl6o", date: "2019" },
  { title: "Orange Juice Ad (CG render)", type: "image", src: "portfolio/Orange juice ad.png", date: "2019" },
  { title: "Plant (CG render) 1", type: "image", src: "portfolio/Plant 1.png", date: "2019" },
  { title: "Plant (CG render) 2", type: "image", src: "portfolio/Plant 2.png", date: "2019" },
  { title: "Plant (CG render) 3", type: "image", src: "portfolio/Plant 3.png", date: "2019" },
  { title: "Bathroom (CG render)", type: "image", src: "portfolio/Bathroom.jpeg", date: "2019" },
  { title: "Flow (CG demo film)", type: "video", src: "https://www.youtube.com/embed/_qf_OcW1F9s", date: "2018" },
  { title: "Sci-fi Plant Concept Art (CG render)", type: "image", src: "portfolio/planet concept.png", date: "2018" },
  { title: "Water Pouring into a Glass (CG render)", type: "image", src: "portfolio/Water Glass Pouring.png", date: "2018" },
  { title: "Black Hole (CG render)", type: "image", src: "portfolio/Black Hole.png", date: "2018" },
  { title: "Balls Splashing in Water (CG render)", type: "image", src: "portfolio/Balls splash.png", date: "2018" },
  { title: "Metal Balls (CG render)", type: "image", src: "portfolio/Metal Balls.png", date: "2018" },
  { title: "A Plant in Rocks (CG render)", type: "image", src: "portfolio/Plant in rocks.jpg", date: "2018" },
  { title: "Sunset (CG render)", type: "image", src: "portfolio/Sunset.png", date: "2018" },
  { title: "Boat (CG render)", type: "image", src: "portfolio/Boat.png", date: "2018" }
];

function createPortfolioItem(item) {
  const element = document.createElement('div');
  element.classList.add('portfolio-item', item.type);

  let content = '';
  if (item.type === 'video') {
    content = `
      <div class="portfolio-item-preview">
        <img src="https://img.youtube.com/vi/${getYouTubeID(item.src)}/0.jpg" alt="${item.title}">
      </div>
    `;
  } else if (item.type === 'image') {
    content = `
      <div class="portfolio-item-preview">
        <img src="${item.src}" alt="${item.title}">
      </div>
    `;
  } else if (item.type === 'link') {
    content = `
      <div class="portfolio-item-preview">
        <div class="link-preview">${item.title}</div>
      </div>
    `;
  }

  element.innerHTML = `
    ${content}
    <div class="portfolio-item-info">
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
    </div>
  `;

  element.addEventListener('click', () => openModal(item));

  return element;
}

function openModal(item) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  let content = '';
  if (item.type === 'video') {
    content = `
      <div class="modal-content">
        <div class="video-container">
          <iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>
        </div>
        <h3>${item.title}</h3>
        <p class="date">${item.date}</p>
      </div>
    `;
  } else if (item.type === 'image') {
    content = `
      <div class="modal-content">
        <img src="${item.src}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="date">${item.date}</p>
      </div>
    `;
  } else if (item.type === 'link') {
    content = `
      <div class="modal-content">
        <h3>${item.title}</h3>
        <p class="date">${item.date}</p>
        <p>${item.description}</p>
        <a href="${item.src}" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    `;
  }

  modal.innerHTML = content;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

function toggleExpandPortfolioItem(item, element) {
  const existingExpanded = element.querySelector('.expanded-content');

  if (existingExpanded) {
    element.removeChild(existingExpanded);
    element.classList.remove('expanded');
  } else {
    const expandedContent = document.createElement('div');
    expandedContent.classList.add('expanded-content');

    if (item.type === 'video') {
      expandedContent.innerHTML = `
                <div class="video-container">
                    <iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
    } else if (item.type === 'image') {
      expandedContent.innerHTML = `
                <img src="${item.src}" alt="${item.title}">
            `;
    } else if (item.type === 'link') {
      expandedContent.innerHTML = `
                <p>${item.description}</p>
                <a href="${item.src}" target="_blank" rel="noopener noreferrer">View Project</a>
            `;
    }

    element.appendChild(expandedContent);
    element.classList.add('expanded');
  }
}

function getYouTubeID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function loadPortfolio() {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  portfolioItems.forEach(item => {
    portfolioGrid.appendChild(createPortfolioItem(item));
  });
}

function filterPortfolio() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function scrollFunction() {
  const scrollBtn = document.getElementById("scroll-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
  loadPortfolio();
  filterPortfolio();

  window.onscroll = scrollFunction;
  document.getElementById("scroll-btn").addEventListener("click", scrollToTop);
});
