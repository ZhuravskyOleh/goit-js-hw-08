// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


function createGalleryCardItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`;
    }).join('');
    
}

 var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });