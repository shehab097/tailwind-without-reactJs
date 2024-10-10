const showNotification = () => {
    document.querySelector(".copied-msg")
        .classList.toggle("notification")

    setTimeout(() => {
        document.querySelector(".copied-msg")
            .classList.toggle("notification")
    }, 2000);
}

// ! copy <xmp> text
function copyAll(button) {
    // Navigate to the parent container and find the 'card-main' sibling
    const cardMain = button.closest('.container-card').querySelector('.card-main');


    copyInnerText(cardMain.innerText)
}

// ! copy <code> text
const code = document.querySelectorAll("code");

for (let i = 0; i < code.length; i++) {
    code[i].addEventListener("click", () => {
        // copy text
        copyInnerText(code[i].innerHTML)
    });

}

//!copy text function
const copyInnerText = (text) => {
    console.log(text);
    navigator.clipboard.writeText(text)

    showNotification();

}


