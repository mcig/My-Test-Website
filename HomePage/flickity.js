function flickityInit() {
  const idFlickityCarousel = '#test-flickity-carousel';
  $(idFlickityCarousel).flickity({
    cellAlign: 'center',
    wrapAround:true,
    pageDots:true
  });
}
