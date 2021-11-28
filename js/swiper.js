const macBookSwiper = new Swiper('.idc-macbook__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: '.idc-macbook__swper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.idc-macbook__swiper-button-next',
        prevEl: '.idc-macbook__swiper-button-prev',
    },

});

const articleSwiper = new Swiper('.idc-article__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,


        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,

        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,

        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
    },

    pagination: {
        el: '.idc-article__swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: '.idc-article__swiper-button-next',
        prevEl: '.idc-article__swiper-button-prev',
    },
});