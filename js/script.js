document.addEventListener("DOMContentLoaded", function() {
    // Navigation scroll effect
    let nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50) {
            nav.classList.add('fix_nav');
        } else {
            nav.classList.remove('fix_nav');
        }
    });

    // Mobile menu functionality
    let bars = document.querySelector('.bars i');
    let secNav = document.querySelector('.second_nav');
    let closeMenu = document.querySelector('.close');
    let navBtnShow = document.querySelector('.nav_btn_show');
    let navIconMenu = document.querySelector('.nav_icon_btn');

    if (bars) {
        bars.addEventListener('click', () => {
            secNav.classList.toggle('show_sec_nav');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            secNav.classList.toggle('show_sec_nav');
        });
    }

    if (navBtnShow) {
        navBtnShow.addEventListener('click', () => {
            navIconMenu.classList.toggle('show_nav_icon_btn');
        });
    }

    //RESPONSIVE MENU
    // let menuBar = document.querySelector('.menu_bars');
    // let menu = document.querySelector('.nav ul');
    // menuBar.addEventListener('click', () => {
    //     menu.classList.toggle('active_menu');
    // });
    const menuBar = document.querySelector('.menu_bars');
    const menu = document.querySelector('nav ul'); // Assuming there's only one nav element

    if (menuBar && menu) {
        menuBar.addEventListener('click', () => {
            menu.classList.toggle('active_menu');
        });
    } else {
        console.error('Menu elements not found');
    }

    //TRYSTED BYE SWIPER SLDIER
    var swiper = new Swiper('.trustSwiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        breakpoints: {
            1400:{
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1000:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            0:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    //SERVICE PART SWIPER SLDIER
    var swiper = new Swiper('.serviceSwiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        breakpoints: {
            1400:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1000:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            0:{
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
    //SERVICE PART SWIPER SLDIER
    var swiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        breakpoints: {
            1400:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1000:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            0:{
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
});
