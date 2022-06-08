const pageScroll = document.querySelectorAll('.page-scroll');
const navList = document.querySelectorAll('nav li');

function hapusActive() {
    for (const list of navList) {
        if (list.classList.contains('active')) {
            list.classList.remove('active');
        }
    }
}

for (const li of pageScroll) {
    li.addEventListener('click', function (e) {

        e.preventDefault();

        const tujuan = li.getAttribute('href');
        const elementTujuan = document.querySelector(tujuan);

        // scroll keun gaes
        window.scrollTo(0, elementTujuan.offsetTop - 40);

        hapusActive();

        if (!li.parentElement.classList.contains('active')) {
            li.parentElement.classList.add('active');
        } else {
            li.parentElement.classList.remove('active');
        }


    })
}