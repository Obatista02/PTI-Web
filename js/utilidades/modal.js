// script.js
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.combo');
  
    items.forEach(item => {
      item.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
  
        modal.style.display = 'block';
  
        // Fechar o modal ao clicar no botão de fechar
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function () {
          modal.style.display = 'none';
        });
  
        // Fechar o modal ao clicar fora dele
        window.addEventListener('click', function (event) {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        });
      });
    });
  });
  

function init(){
}
export default{
  init
}