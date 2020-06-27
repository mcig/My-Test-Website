function controlsInit() {
  gifsAndPackeryJquery();
  smoothScroll('#goToTopAnchor','#topHash');

  //navbar animated toggle on click
  $('.navbar-toggler').on('click',()=>animateNavButton('#toggledOn','#toggledOff'));
}


function jqueryDoubleClickMobileFriendly(strTarget){
  let doubleClicked = false;
  $(strTarget).on('click', (e) => {
      if (doubleClicked) {
        let url = e.target.src;
        window.open(url);
      }
      doubleClicked = true;
      setTimeout(() => {
          doubleClicked = false;
      }, 300);
  });
}

function smoothScroll(idFromStr,idToStr){
  $(idFromStr).on('click',()=>{
    $('html, body').animate({
      scrollTop: $(idToStr).offset().top
    }, 800, ()=>{window.location.hash = idToStr;});
  });
}

function animateNavButton(iconOnHash,iconOffHash){
  let $svgOn = $('svg'+ iconOnHash);
  let $svgOff = $('svg'+ iconOffHash);
  if($svgOn.css('display')=='none'){//if not clicked
    hide($svgOff);
    show($svgOn);
  }
  else{//if clicked
    hide($svgOn);
    show($svgOff);
  }

  function hide($jquerySvg){
    $jquerySvg.css('display','none');
  }
  function show($jquerySvg){
    $jquerySvg.css('display','block');
  }
}

function gifsAndPackeryJquery(){
  //Relayout button
  $("#relayoutButton").on("click", () => $packeryGrid.packery('layout'));

  //Reload Gifs button
  $("#reloadGifsButton").on("click", () => {
    $packeryGrid.find(".grid-image-item").each((i,gridItem) => {
      giphyRandomFetcher(gridItem.childNodes[1]);
    });
  });

  //Show All
  $("#showAllButton").on("click", () => $packeryGrid.isotope({filter:'*'}));

  //Filter Gifs
  $("#filterGifsButton").on("click", () => $packeryGrid.isotope({filter:'.randGifItem'}));

  //Filter Boxes
  $("#filterBoxesButton").on("click", () => $packeryGrid.isotope({filter:'.grid-item'}));

  //Liked Gif pop-up
  jqueryDoubleClickMobileFriendly('.randgifImgs');
}
