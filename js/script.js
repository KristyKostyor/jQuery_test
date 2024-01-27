//const text = jQuery('.header').html();
//console.log('text: ', text);



$('.header__burger').on('click', () => {
    $(".navigation").animate(
      {
        left: 0,
      },
      500,
      function () {
        $(".navigation__close").animate(
          {
            opacity: 1,
          },
          300,
          "swing"
        );
      });
})


const closeBtn = $(".navigation__close");
closeBtn.click(() => {
  $(".navigation").animate(
      {
        left: "-100%",
      },
      700)
});