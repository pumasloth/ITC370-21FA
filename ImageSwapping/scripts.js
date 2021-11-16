/*
    Ethan Penrose
    ITC 370
    11/13/2021
    Image Swapping
*/

// Place all images into arrays.
var imageArray1 = [
    "images\\pexels-pixabay-53435.jpg",
    "images\\pexels-guillaume-meurice-1591447.jpg",
    "images\\pexels-kaique-rocha-775201.jpg",
    "images\\pexels-pixabay-38537.jpg",
    "images\\pexels-quang-nguyen-vinh-2166695.jpg"
];

var imageArray2 = [
    "images\\pexels-pixabay-36717.jpg",
    "images\\pexels-sunil-patel-599708.jpg",
    "images\\pexels-skitterphoto-9198.jpg",
    "images\\pexels-pixabay-56875.jpg",
    "images\\pexels-sparsh-karki-2350074.jpg"
];

// Create a window load event that loads all the images
// (from the array) onto the HTML page.
window.onload = function() {
    imageArray1.forEach(setImage);
}

function setImage(image, index) {
    var img = document.createElement("img");
    img.src = image;

    if (index === 0) {
        // Display the first image full size.
        img.style.width = "100%";
        img.alt = "Enjoy one large image!";
    } else {
        img.width = "450";
        img.height = "450";
        img.alt = "Enjoy the dynamic thumbnail images!";
    }

    // Center the images.
    img.style.margin = "0 auto";
    img.style.marginTop = "10px";
    img.style.marginBottom = "10px";
    document.body.appendChild(img);
}

function changeImages() {
    imageArray2.forEach(changeImage);
}

function changeImage(image) {
    document.getElementById("img").src = image.src;
}

var images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dblclick", function() {
        changeImage(imageArray2[i]);
    });
}