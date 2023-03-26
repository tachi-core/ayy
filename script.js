let popup = document.getElementById("popup");
// const b = document.querySelector('button.btnNo');
const first = document.querySelector('.first');
const question = document.querySelector('.question');
const btnYes = document.querySelector('.btnYes');
const btnNo = document.querySelector('.btnNo');

const firstRect = first.getBoundingClientRect();
const btnNoRect = btnNo.getBoundingClientRect();


function nextPage() {
    popup.classList.add("next-page")
};


btnYes.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
});

btnNo.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (firstRect.width - btnNoRect.width)) + 1;
    const j = Math.floor(Math.random() * (firstRect.height - btnNoRect.height)) + 1;

    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
});


btnYes.addEventListener('click', (e) => {
    e.preventDefault();
    btnYes.classList.add("animate");

    setTimeout(() => {
        btnYes.classList.remove("animate");
    }, 600); // 1s = 100ms
});
