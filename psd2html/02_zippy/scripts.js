var prevActiveItem = document.querySelector("#video-projects .gallery .gallery-item.active");

function activateGalleryItem() {
    var hoveredItem = document.querySelector("#video-projects .gallery .gallery-item:hover");
    if (hoveredItem.classList.contains('active')) {
        hoveredItem.classList.remove('active');
        prevActiveItem.classList.add('active');
    } else {
        prevActiveItem = document.querySelector("#video-projects .gallery .gallery-item.active");
        prevActiveItem.classList.remove('active');
        hoveredItem.classList.add('active');
    }

}
