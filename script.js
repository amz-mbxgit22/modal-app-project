// Select all cards
const cards = document.querySelectorAll('.card');

// Modal container to display clicked card content
const modalContainer = document.querySelector('#modal-container');

const overlay = document.querySelector('.overlay');

const modalContent = modalContainer.querySelector('.modal-content');

const modalImagee = modalContainer.querySelector('img');

const modalCloseBtn = document.querySelector(".btn-close");


const toggleHide = (element) => {    
    element.classList.toggle("hide");
};

const closeModal = () => {
    toggleHide(overlay);
    toggleHide(modalContainer);
}

overlay.addEventListener('click', () => {
    closeModal();
});

modalCloseBtn.addEventListener('click', () => {
    closeModal();
});

// Add event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        //Toggle hide class
        toggleHide(overlay);
        toggleHide(modalContainer);
        

        // Get the clicked card
        const clickedCard = event.currentTarget; // "currentTarget" ensures we target the card itself

        // You can also get the image URL if needed
        const selectedImage = clickedCard.querySelector('img').src;

        // Create a modal content structure
        modalContent.innerHTML = `
            <div class="modal-content">
                <img src="${selectedImage}" alt="Card Image">
            </div>
        `;
    });
});

