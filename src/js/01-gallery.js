// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

function creatCardImagesMarkup (images) {
	return images.map(({ preview, original, description }) => {
	  return `<div>
	 <a class="gallery__item" href="${original}">
	  <img
		 class="gallery__image"
		  src="${preview}"
			alt="${description}"
	  />
	 </a>
	</div>`
	 }).join('');
	};
  
  const galleryBox = document.querySelector('.gallery');
  const cardsMarkup = creatCardImagesMarkup(galleryItems);
  
  galleryBox.insertAdjacentHTML('beforeend', cardsMarkup);
  
  
  const lightbox = new SimpleLightbox('.gallery a', {
	  captionsData: 'alt',
	  captionDelay: 250,
	});

console.log(galleryItems);