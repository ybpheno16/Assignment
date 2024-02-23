document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            // Render images
            renderImages(data);
        })
        .catch(error => console.error('Error fetching images.json:', error));
});

function renderImages(images) {
    const container = document.getElementById('imageContainer');

    // Loop through the images and create image elements
    images.forEach(imageObj => {
        const imgElement = document.createElement('img');
        imgElement.src = imageObj.image;
        container.appendChild(imgElement);
    });
}
