new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    effect: 'coverflow',
    // autoHeight: true,
    // при зміні розмру екрану - відключити
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 5,
    //     slideShadows: true,
    // },
    slideToClickedSlide: true,
    loop: true,
    speed: 800,
    lazyPreloadPrevNext: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});