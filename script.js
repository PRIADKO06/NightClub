document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalButtons = document.querySelectorAll(".custom-btn.btn-9"); // Вибір всіх кнопок
    const closeModalButton = document.querySelector(".close");

    // Відкриття модального вікна
    openModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    // Закриття модального вікна 
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закриття модального вікна при кліку поза ним 
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        setTimeout(() => {
            modal.querySelector(".modal-content").style.animation = "slide-down 0.5s ease-out forwards";
        }, 10); // Невелика затримка для відображення стилів
    });
});