function FlickityTest() {
  const idFlickityCarousel = '#test-flickity-carousel';
  $(idFlickityCarousel).flickity({
    cellAlign: 'center',
    wrapAround:true,
    pageDots:true
  });
}

$(document).ready(() => FlickityTest());
