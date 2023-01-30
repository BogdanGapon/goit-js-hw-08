import { galleryItems } from './gallery-items';
import simpleLightBox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
`;
  })
  .join('');

gallery.innerHTML = createGalleryItem;

new simpleLightBox('.gallery a', {
  captionsData: 'alt',
})();
