const btn = document.getElementById('btn');
const check = document.getElementById('check-boxes');

function onClick() {
    if (check.style.display === 'none') {
        check.style.display = 'block';
    } else {
        check.style.display = 'none'
    }
}

btn.addEventListener('click', onClick);

