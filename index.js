document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const popup = document.querySelector('#popup');
  const overlay = document.querySelector('#overlay');
  const closeBtn = document.querySelector('#closeBtn');
  const popupImage = document.querySelector('#popupImage');
  const popupName = document.querySelector('#popupName');
  const popupDescription = document.querySelector('#popupDescription');
  const popupSobre = document.querySelector('#popupSobre');

  // Check if all elements are found
  if (!cards || !popup || !overlay || !closeBtn || !popupImage || !popupName || !popupDescription || !popupSobre) {
      console.error('One or more elements not found:', {
          cards, popup, overlay, closeBtn, popupImage, popupName, popupDescription, popupSobre
      });
      return;
  }

  // Add click event to each card
  cards.forEach(card => {
      card.addEventListener('click', () => {
          try {
              const name = card.getAttribute('data-name');
              const description = card.getAttribute('data-description');
              const sobre = card.getAttribute('data-sobre');
              const imageSrc = card.querySelector('img').src;

              // Populate popup with card data
              popupName.textContent = name;
              popupDescription.textContent = description;
              popupSobre.textContent = sobre;
              popupImage.src = imageSrc;
              popupImage.alt = name;

              // Show popup and overlay
              popup.classList.add('active');
              overlay.classList.add('active');

              console.log('Popup opened for:', name); // Debug log
          } catch (error) {
              console.error('Error opening popup:', error);
          }
      });
  });

  // Close popup when close button is clicked
  closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      console.log('Popup closed via close button'); // Debug log
  });

  // Close popup when overlay is clicked
  overlay.addEventListener('click', () => {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      console.log('Popup closed via overlay'); // Debug log
  });
});