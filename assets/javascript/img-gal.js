let images = [  
                './assets/img/img1.jpeg', './assets/img/img2.jpeg', './assets/img/img3.jpeg', './assets/img/img4.jpeg',
                './assets/img/img5.jpeg', './assets/img/img6.jpeg', './assets/img/img7.jpeg', './assets/img/img8.jpeg',
                './assets/img/img9.jpeg'
             ]

let currentImageCounter;

function renderImageGallery(){
    let imageContainer = document.getElementById('imageContainer');
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        imageContainer.innerHTML += `<img onclick="openCurrentImage(${i})" id="img-${i}" src="${image}" class="img-thumbnail">`;   
    }
}

function openCurrentImage(i){
    currentImageCounter = i;
    document.getElementById('imageOverlay').style.display = 'flex';
    let currentImage = document.getElementById(`currentImage`);
    currentImage.classList.add('scale-in-center');
    currentImage.src = images[i];
    document.body.classList.add('body-overflow-hidden');
}

function nextImage(){
    let indexPlusOne = currentImageCounter + 1;
    currentImageCounter = indexPlusOne;
    let nextImage = images[indexPlusOne];
    let currentImage = document.getElementById(`currentImage`);
    if(currentImageCounter < images.length){
        currentImage.src = nextImage
    } else {
                currentImage.src = images[0];
                currentImageCounter = 0;
            }
}

function previousImage(){
    let indexMinusOne = currentImageCounter - 1;
    currentImageCounter = indexMinusOne;
    let previousImage = images[indexMinusOne];
    let currentImage = document.getElementById(`currentImage`);
    if(currentImageCounter < images.length){
        currentImage.src = previousImage; 
        currentImageCounter = currentImageCounter  
    }
    if(currentImageCounter < 0){
        currentImage.src = images[images.length - 1];
        currentImageCounter = images.length - 1 ;
    }
}

function closeImage(){
    document.getElementById('imageOverlay').style.display = 'none';
    document.body.classList.remove('body-overflow-hidden');
}