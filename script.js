// -- Select all cards
const cards = document.querySelectorAll('.card');

// -- Modal container to display clicked card content
const modalContainer = document.querySelector('#modal-container');

const overlay = document.querySelector('.overlay');

const modalContent = modalContainer.querySelector('.modal-content');

const modalCloseBtn = document.querySelector(".btn-close");

const toggleHide = (element) => {    
    element.classList.toggle("hide");
};

const closeModal = () => {
    toggleHide(overlay);
    toggleHide(modalContainer);
    window.history.replaceState(null, '', '/');

}

// cards.forEach(card => {  
//     console.log(card.id);
// });  

// const idSelector = () => {
//     card.id;
//     console.log(card.id);
// }


overlay.addEventListener('click', () => {
    closeModal();
});

modalCloseBtn.addEventListener('click', () => {
    closeModal();
});

// -- Add event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        // -- Toggle hide class
        toggleHide(overlay);
        toggleHide(modalContainer);

        let card_id = card.id;
        console.log(card_id);

        let key_value = `card?${card_id.substring(0, 4)}=${card_id.substring(5)}`;

        const urlUpdater = () => {
            let newUrl = (window.location.href + key_value);
            console.log(newUrl);
            // window.location.replace(newUrl);
            // window.history.pathname(newUrl);
            // window.location.href = newUrl;
            window.history.replaceState(null, '', key_value);
        }
        
        // -- Get the clicked card
        const clickedCard = event.currentTarget; // -- "currentTarget" ensures we target the card itself

        // -- You can also get the image URL if needed
        const selectedImage = clickedCard.querySelector('img').src;

        // -- Create a modal content structure
        modalContent.innerHTML = `
            <div class="modal-content">
                <img src="${selectedImage}" alt="Card Image">
            </div>
        `;
        // -- Update the url without reloading
        urlUpdater();
        //idSelector();
    });
});