
const header = document.querySelector('header');
let previousScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > previousScrollPos && currentScrollPos > 200) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  previousScrollPos = currentScrollPos;
});


const buyButtons = document.querySelectorAll('.buy-button');


function handleBuyButtonClick(event) {
  const productId = event.target.dataset.productId;

  console.log('Produto ${productId} adicionado ao carrinho.');
}

buyButtons.forEach(button => {
  button.addEventListener('click', handleBuyButtonClick);
});



const h2 = document.querySelector('h2');

const options = {
  root: null, 
  threshold: 0.5 
};

const animateCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('animate__bounceIn');
    } else {
    
      entry.target.classList.remove('animate__bounceIn');
    }
  });
};

