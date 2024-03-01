document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.subTituloModal');

    items.forEach(item => {
        item.addEventListener('click', function () {

            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            var display = modal.style.display;
            if (display == 'none') {
                modal.style.display ='block';
            }else{
                modal.style.display ='none';
            }
        })
    })
});






function init() {
}
export default {
    init
}
