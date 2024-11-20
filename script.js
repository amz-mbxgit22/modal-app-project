// Select all cards
const cards = document.querySelectorAll('.card');

// Modal container to display clicked card content
const modalContainer = document.querySelector('#modal-container');

const modalContent = modalContainer.querySelector('#modal-content');

const modalImagee = modalContainer.querySelector('img');

// Add event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        // Get the clicked card
        const clickedCard = event.currentTarget; // "currentTarget" ensures we target the card itself

        // You can also get the image URL if needed
        const selectedImage = clickedCard.querySelector('img').src;

        // Create a modal content structure
        modalContainer.innerHTML = `
            <div class="modal-content">
                <img src="${selectedImage}" alt="Card Image">
            </div>
        `;

    });
});

const toggleOverlay = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.contains('hide');
};

// Close modal on clicking the 'X' button
const btn = document.querySelector('.btn-close');

btn.addEventListener('click', () => {
  console.log("Button clicked!");
  modalContainer.innerHTML = ''; // Clear the modal content
  console.log("Modal cleared.");
});
