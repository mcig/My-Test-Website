function FlickityTest() {
  const idFlickityCarousel = '#test-flickity-carousel';
  $(idFlickityCarousel).flickity({
    cellAlign: 'center',
    wrapAround:true,
    pageDots:true
  });
}

function jqueryTest(){
  ;
}

$(document).ready(() => {
  FlickityTest();
  jqueryTest();
});
