/*
    Ethan Penrose
    ITC 370
    11/13/2021
    Image Swapping
*/

function changeImage() {
    var image = document.getElementById("mainImage");
}

var imagesArray = [
    "images\\pexels-guillaume-meurice-1591447.jpg",
    "images\\pexels-kaique-rocha-775201.jpg",
    "images\\pexels-pixabay-38537.jpg",
    "images\\pexels-quang-nguyen-vinh-2166695.jpg",
    "images\\pexels-sparsh-karki-2350074.jpg"
];

imagesArray.forEach(function (image) {
    var img = document.createElement('img');
    img.src = image;
    img.height = "450";
    img.width = "450";
    img.style.margin = "0 auto";
    img.style.marginTop = "10px";
    img.style.marginBottom = "10px";
    img.alt = "Enjoy the dynamic images!";
    document.body.appendChild(img);
});