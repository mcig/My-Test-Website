function giphyInit(){
  bindDraggie(".grid-image-item",true);
}

//these 2 are done
function giphyRandomFetcher(domImgElementStr){
  const giphyApi = "http://api.giphy.com/v1/gifs/random?api_key=gUCtGBLQKcuEFL5bgR8PcgOgrevJcbz6&tag=g"
  asyncGiphyFetch(giphyApi).then(result=>{
    $(domImgElementStr).attr("src",result);
  }).catch(err => $("body").prepend("<div class='alert alert-danger'>"+err+"</div>"));
}

async function asyncGiphyFetch(giphyApi){
  let response = await fetch(giphyApi);
  let json = await response.json();
  return json.data.fixed_height_small_url;
}
