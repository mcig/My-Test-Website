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

  bindDraggie('.grid-item');
}

function bindDraggie(classStr){
  // make all grid-items draggable
  $packeryGrid.find(classStr).each((i,gridItem) => {
    let draggie = new Draggabilly(gridItem);
    // bind drag events to Packery
    $packeryGrid.packery('bindDraggabillyEvents', draggie);
  });
}
