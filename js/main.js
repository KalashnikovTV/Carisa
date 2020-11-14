$(".phone-mask").mask("+375 (99) 999-99-99");

$('.header__menu-btn').on('click', function () {
    $('.menu .menu__list').slideToggle();
});

// 2-ой выпадающий список
$('.menu__list .menu__list-wrapper .menu__list-drop-down').on('click', function() {
    $(this).next().toggleClass('active');
});

// 3-ий выпадающий список
$('.drop-down__list .menu-arrow').on('click', function () {
    $(this).next().toggleClass('active');
});