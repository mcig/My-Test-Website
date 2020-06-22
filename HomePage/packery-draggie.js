let $packeryGrid = $('.grid');

function draggieInit(){
  let $draggable = $('.draggable').draggabilly({
  });
}

function packeryInit(){
  draggieInit();

  //rect resizing
  let newH = ($(".grid-item-rect").height()) * 1.5;
  $(".grid-item-rect").css({'width':newH + 'px'})

  //packery init
  $packeryGrid.packery({
    columnWidth: 90
  });

  bindDraggie('.grid-item',false);
}

function bindDraggie(classStr,giphyBool=false){
  // make all grid-items draggable
  $packeryGrid.find(classStr).each((i,gridItem) => {
    if(giphyBool){
      giphyRandomFetcher(gridItem.childNodes[1]);
    }
    let draggie = new Draggabilly(gridItem);
    // bind drag events to Packery
    $packeryGrid.packery('bindDraggabillyEvents', draggie);
  });
}
