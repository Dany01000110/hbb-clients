$('.main-saving').click(function(e) {
    e.preventDefault();
    $('.list-saving').toggleClass('active');
    $('.saving-dropdown-icon').toggleClass('active');
});

$('.main-insurance').click(function(e) {
    e.preventDefault();
    $('.list-insurance').toggleClass('active');
    $('.insurance-dropdown-icon').toggleClass('active');
});

$('.main-credit').click(function(e) {
    e.preventDefault();
    $('.list-credit').toggleClass('active');
    $('.credit-dropdown-icon').toggleClass('active');
});