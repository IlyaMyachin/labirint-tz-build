const modal = document.querySelector('.main__left-block')
const modalTitle = document.querySelector('.cart__title')
const openModal = document.querySelector('.footer__more')
const closeModal = document.querySelector('.cart__button')

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
  modalTitle.innerHTML = 'В заказе 5 товаров (2 кг)';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

