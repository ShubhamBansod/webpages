window.onload = function() {
  const gridContainer = document.querySelector('.grid');

  // Loop through mediaData and create HTML elements
  mediaData.media.forEach(item => {
    const mediaElement = document.createElement(item.type === 'image' ? 'img' : 'video');
    mediaElement.src = item.url;
    mediaElement.alt = item.title;
    mediaElement.addEventListener('click', () => openModal(item.id, item.type));
    
    // Add the media element to the grid container
    gridContainer.appendChild(mediaElement);
  });
};

function openModal(id, type) {
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");
  const modalBody = document.getElementById("modalBody");

  // Find the media item by id
  const item = mediaData.media.find(item => item.id === id);
  
  // Set modal content (image/video + details)
  if (item.type === 'image') {
    modalContent.innerHTML = `<img src="${item.url}" alt="${item.title}" />`;
  } else if (item.type === 'video') {
    modalContent.innerHTML = `<video autoplay loop muted><source src="${item.url}" type="video/mp4" /></video>`;
  }

  // Set modal body content (title, description, highlights, etc.)
  modalBody.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <ul>
      ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
    </ul>
    <div>
      <a href="${item.playstoreLink}" target="_blank">Download from Playstore</a>
      <a href="${item.appstoreLink}" target="_blank">Download from Appstore</a>
    </div>
  `;

  // Show the modal
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
