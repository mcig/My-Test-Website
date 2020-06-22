function FlickityTest() {
  const idFlickityCarousel = '#test-flickity-carousel';
  const classFlickityCarouselImgs = '.carousel-cell img';

  $(idFlickityCarousel).flickity({
    cellAlign: 'left',
    contain: true
  });

  let flkty = $(idFlickityCarousel).data('flickity');
  let $imgs = $(classFlickityCarouselImgs);

  $(idFlickityCarousel).on('scroll.flickity', (event, progress) => flkty.slides.forEach((slide, i) => {
    let img = $imgs[i];
    let x = (slide.target + flkty.x) * -1 / 3;
    img.style.transform = 'translateX( ' + x + 'px)';
    })
  );
}

$(document).ready(() => FlickityTest());
