const welcomeMessage = document.querySelector(".welcome-message");
const buttonCTA = document.querySelector(".cta");

welcomeMessage.addEventListener("click", () => {
    welcomeMessage.children[0].textContent = "Have a Good Time!";
})

buttonCTA.addEventListener("click", () => {
    buttonCTA.nextElementSibling.style.display = "flex";
})