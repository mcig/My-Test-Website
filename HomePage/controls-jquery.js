function controlsInit() {
  //Relayout button
  $("#relayoutButton").on("click", () => $packeryGrid.packery('layout'));
  //Reload Gifs button
  $("#reloadGifsButton").on("click", () => {
    $packeryGrid.find(".grid-image-item").each((i,gridItem) => {
      giphyRandomFetcher(gridItem.childNodes[1]);
    });
  });
  //Liked Gif pop-up
  jqueryDoubleClickMobileFriendly(".randgifs");
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
