function controlsInit() {
  gifsAndPackeryJquery();
  smoothScroll('#goToTopAnchor','#topHash');
}


function jqueryDoubleClickMobileFriendly(strTarget){
  //thx stackoverflow guy
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
