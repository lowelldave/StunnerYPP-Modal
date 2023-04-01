// NOTE: Get the container and the cancel button list for multiple entries.
const container = document.querySelector('.container');
const cancelButtonList = document.querySelectorAll('.button');

// NOTE: Applying modal event listeners
const applyModalEvent = (node, targetButton) => {
    const modalButtonCancel = node.querySelector('.modal__button--cancel');
    const modalButtonAgree = node.querySelector('.modal__button--agree');

    modalButtonCancel.addEventListener('click', () => node.remove());
    modalButtonAgree.addEventListener('click', () => {
        node.querySelector('.modal__footer').remove();
        node.querySelector('.modal__text').innerHTML = "Subscription successfully cancelled!";

        setTimeout(() => {
            node.remove();

            targetButton.replaceWith('cancelled');
        }, 2000);
    });
};

// NOTE: Loop through cancelButtonList to add event listener for opening modal.
cancelButtonList.forEach((cancelItem) => {
    cancelItem.addEventListener('click', (event) => {
        // NOTE: Cloning template modal to add as .container sibling
        const modalDuplicate = document.querySelector('.modal__wrapper.template').cloneNode(true);
    
        modalDuplicate.classList.remove('template');
        modalDuplicate.style.display = 'flex';
        container.parentNode.insertBefore(modalDuplicate, container.nextSibling);
    
        const currentButton = event.target;
    
        applyModalEvent(modalDuplicate, currentButton);
    });    
});
