const imageContainer = document.getElementById('img-container');
let photosArray = [];


function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        let h1 = document.createElement('h1');
        h1.innerText = `Author - ${photo.user.username} on unsplash`;
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
        imageContainer.appendChild(h1);
    });
}

const count = 30;
const apiKey = 'oKWMK2dqjjL5QD3U90zUVKgeyKk54qc2jZ3aHsLPgzQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const res = await fetch(apiUrl);
        photosArray = await res.json();
        displayPhotos();
    } catch (error) {

    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
})
// on Load 
getPhotos();
