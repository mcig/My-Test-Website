function giphyInit() {
  bindDraggie(".grid-image-item", true);
}

class Gif {
  constructor(url, width, height) {
    this.url = url;
    this.width = parseInt(width) + 12;
    this.height = parseInt(height) + 12;
  }
}

async function asyncGiphyFetch(giphyApi) {
  let response = await fetch(giphyApi);
  let json = await response.json();
  return new Gif(json.data.fixed_height_downsampled_url, json.data.fixed_height_downsampled_width,
    json.data.fixed_height_downsampled_height);
}

//these 2 are done
function giphyRandomFetcher(domImgElementStr) {
  const giphyApi = "http://api.giphy.com/v1/gifs/random?api_key=gUCtGBLQKcuEFL5bgR8PcgOgrevJcbz6&tag=g"
  let gifWidth;
  let gifHeight;
  asyncGiphyFetch(giphyApi).then(fetchedGif => {
    $(domImgElementStr).attr("src", fetchedGif.url);
    $(domImgElementStr.parentNode).css({"width":fetchedGif.width,"height":fetchedGif.height});
    $packeryGrid.packery('layout');
  }).catch(err => $("body").prepend("<div class='alert alert-danger'>" + err + "</div>"));
}
