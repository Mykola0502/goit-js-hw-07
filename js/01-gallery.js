import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryRefsMarkup(galleryItems)
);

galleryContainer.addEventListener('click', onImageModalOpen);

function createGalleryRefsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

let instance;

function onImageModalOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const imageUrl = event.target.dataset.source;
  instance = basicLightbox.create(`<img width="1280" src="${imageUrl}">`);

  instance.show();

  function onEscKeyPress(event) {
    console.log(event);
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
      onCloseModal();
    }
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    instance.close();
  }
}

console.log(galleryItems);
