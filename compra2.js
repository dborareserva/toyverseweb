
document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buy-button");
  
    buyButton.addEventListener("click", function () {
      const productId = 1; // Defina o ID do produto correspondente a esta página
  
      
  
      alert("Produto " + productId + " adicionado ao carrinho!");
    });
  });
  
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
  
    if (currentScrollPos > previousScrollPos && currentScrollPos > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  
    previousScrollPos = currentScrollPos;
  });
  