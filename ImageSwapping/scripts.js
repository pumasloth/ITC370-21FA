/*
    Ethan Penrose
    ITC 370
    11/13/2021
    Image Swapping
*/

let useFirstSetOfImages = true;

// Place all images into arrays, in groups of four (A and B).
// 0-3 = A
// 4-7 = B
var imageArray = [
    "images\\A-pexels-guillaume-meurice-1591447.jpg",
    "images\\A-pexels-kaique-rocha-775201.jpg",
    "images\\A-pexels-pixabay-38537.jpg",
    "images\\A-pexels-sparsh-karki-2350074.jpg",
    "images\\B-pexels-pixabay-36717.jpg",
    "images\\B-pexels-pixabay-53435.jpg",
    "images\\B-pexels-skitterphoto-9198.jpg",
    "images\\B-pexels-sunil-patel-599708.jpg"
];

// Load the first four images.
window.onload = function() {
    for (let index = 0; index < 4; index++) {
        setImage(imageArray[index], index);
    }
}

function setImage(image, index) {
    if (index === 0) {
        document.getElementById("largeImage").src = image;
    }

    // Add one to offset starting at zero.
    var thumbnailId = "thumbnail" + (index + 1);
    document.getElementById(thumbnailId).src = image;
}

// Swap all four images in the array based on group (A or B).
function swapImages() {
    if (useFirstSetOfImages) {
        document.getElementById("thumbnail1").src = imageArray[4];
        document.getElementById("thumbnail2").src = imageArray[5];
        document.getElementById("thumbnail3").src = imageArray[6];
        document.getElementById("thumbnail4").src = imageArray[7];
        useFirstSetOfImages = false;
    } else {
        document.getElementById("thumbnail1").src = imageArray[0];
        document.getElementById("thumbnail2").src = imageArray[1];
        document.getElementById("thumbnail3").src = imageArray[2];
        document.getElementById("thumbnail4").src = imageArray[3];
        useFirstSetOfImages = true;
    }

    // Set the large image to the first thumbnail.
    changeLargeImage(document.getElementById("thumbnail1"));
}

function changeLargeImage(image) {
    document.getElementById("largeImage").src = image.src;
}

// Create dynamic eventlisteners.
document.getElementById("largeImage").addEventListener("dblclick", function() {
    swapImages();
});

var thumbnails = document.getElementsByClassName("thumbnail");
for (let index = 0; index < thumbnails.length; index++) {
    thumbnails[index].addEventListener("click", function() {
        changeLargeImage(this);
    });
}