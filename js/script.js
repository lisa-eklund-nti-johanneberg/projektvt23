const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  };
  
  navSlide();
  


  const cardsContainer = document.querySelector('.card-container');

const cardsData = [
  {
    front: 'Card 1 Front',
    back: 'Card 1 Back',
  },
  {
    front: 'Card 2 Front',
    back: 'Card 2 Back',
  },
  {
    front: 'Card 3 Front',
    back: 'Card 3 Back',
  },
  {
    front: 'Card 4 Front',
    back: 'Card 4 Back',
  },
  {
    front: 'Card 5 Front',
    back: 'Card 5 Back',
  },
  {
    front: 'Card 6 Front',
    back: 'Card 6 Back',
  },
  {
    front: 'Card 7 Front',
    back: 'Card 7 Back',
  },
  {
    front: 'Card 8 Front',
    back: 'Card 8 Back',
  },
];


