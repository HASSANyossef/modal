
let openModal = document.querySelector(".header button");
let closeModal = document.querySelector(".text i");
let content = document.querySelector(".content");


openModal.addEventListener("click", open);

function open()
{
    content.style.transform = "scale(1)";
}

closeModal.addEventListener("click", close);


function close()
{
    content.style.transform = "scale(0)";
}

document.addEventListener("keydown", enterKey);

function enterKey(e)
{
    if (e.key == "Enter")
        open();
}

document.addEventListener("keydown", escapeKey);

function escapeKey(e)
{
    if (e.key == "Escape")
        close();
}