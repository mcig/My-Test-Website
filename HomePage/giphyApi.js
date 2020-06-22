function giphyInit(){
  $packeryGrid.find('.grid-image-item').each((i,gridImgItem) => {
    giphyRandomFetcher(gridImgItem);
    let draggie = new Draggabilly(gridImgItem);
    // bind drag events to Packery
    $packeryGrid.packery('bindDraggabillyEvents', draggie);
  });
}


//these 2 are done
function giphyRandomFetcher(domElement){
  const giphyApi = "http://api.giphy.com/v1/gifs/random?api_key=gUCtGBLQKcuEFL5bgR8PcgOgrevJcbz6&tag=g"
  asyncGiphyFetch(giphyApi).then(result=>{
    $(domElement).attr("src",result);
  }).catch(err => $("body").prepend("<div class='alert alert-danger'>"+err+"</div>"));
}

async function asyncGiphyFetch(giphyApi){
  let response = await fetch(giphyApi);
  let json = await response.json();
  return json.data.fixed_height_small_url;
}
