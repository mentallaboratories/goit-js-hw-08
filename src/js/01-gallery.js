import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";




import { galleryItems } from './gallery-items.js';
// Change code below this line


//1STEP Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const imageGalleryContainer = document.querySelector('.gallery');
const markup = createImageGalleryMarkup(galleryItems);
console.log('wassaaaap')
imageGalleryContainer.innerHTML = markup;

//console.log(createImageGalleryMarkup(galleryItems));

function createImageGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
         <div class="gallery">
            <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
            </a>
        </div>
         `
    }).join('')
};

//new SimpleLightbox(".gallery a", {captionDelay:250, captionsData:alt});

//  imageGalleryContainer.addEventListener('click', onImageClick);
//  function onImageClick(e){ 
//      e.preventDefault();
//      if (!e.target.classList.contains('gallery__image')){
//          return;
//     }
    const lightBox = new SimpleLightbox(".gallery a", {captionDelay:250, captionsData:"alt" });
//}
