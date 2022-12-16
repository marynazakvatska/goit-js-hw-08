// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')

function markUpGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }).join('')
}
galleryEl.insertAdjacentHTML("beforeend",  markUpGallery(galleryItems))
console.log(galleryEl)


new SimpleLightbox('.gallery a', {captionsData: 'alt',captionDelay :250});




