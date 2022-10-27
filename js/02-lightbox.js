import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGalleryRefsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryRefsMarkup(galleryItems)
);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
