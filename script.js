document.addEventListener("DOMContentLoaded", () => { 
    const modal = document.getElementById("modal"); 
    const openModalButton = document.getElementById("more-info"); 
    const closeModalButton = document.querySelector(".close"); 
 
    // Відкриття модального вікна 
    openModalButton.addEventListener("click", () => { 
        modal.style.display = "block"; 
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