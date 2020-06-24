function buttonsInit() {
  //Relayout button
  $("#relayoutButton").on("click", () => $packeryGrid.packery('layout'));
  //Reload Gifs button
  $("#reloadGifsButton").on("click", () => {
    $packeryGrid.find(".grid-image-item").each((i,gridItem) => {
      giphyRandomFetcher(gridItem.childNodes[1]);
    });
  });
}
