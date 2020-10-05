// Подключения обработчика анимации при скроле
new WOW().init();

// Инициализация слайдера
$('.using_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev-arrow arrow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="43" viewBox="0 0 22 43"><g><g><path fill="#ccc" d="M18.771 21.5L.72 2.444A1.041 1.041 0 1 1 2.192.972l18.75 19.791a1.04 1.04 0 0 1 0 1.473L2.192 42.028A1.041 1.041 0 1 1 .72 40.555z"/></g></g></svg></span>',
  nextArrow: '<span class="next-arrow arrow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="43" viewBox="0 0 22 43"><g><g><path fill="#ccc" d="M18.771 21.5L.72 2.444A1.041 1.041 0 1 1 2.192.972l18.75 19.791a1.04 1.04 0 0 1 0 1.473L2.192 42.028A1.041 1.041 0 1 1 .72 40.555z"/></g></g></svg></span>'
});

// Обработчик модалки
var modal = $('.modal_wrap');
$('.modal_triger').on('click', function(e){
  e.preventDefault();
  modal.fadeIn(300);
});
$('.modal_close').on('click', function(e){
  e.preventDefault();
  modal.fadeOut(300);
});

// Обработчик фориы
var form = $('.curent_form');

$('.submit').on('click', function(e){
  e.preventDefault();
  var curentForm = $(this).parents('form'),
      curentEmail = curentForm.find('.email_input'),
      pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if (!(pattern.test(curentEmail.val()))) {
    curentEmail.addClass('error');
    alert('Ошыбка заполнения поля...');
  } else {
    curentEmail.removeClass('error');
    alert('Успешная отправка...');
    // отправляем данные на обработчик
  }
})

// Обработка вызова моб. меню
$('.mob-button').on('click', function(){
  $(this).toggleClass('active');
  $('.menu').toggleClass('active');
})