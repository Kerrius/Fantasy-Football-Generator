var liveevent = document.querySelector('#liveevent')
var newscard = document.querySelector('.newscard')
var image = document.querySelector('#image')
var headline = document.querySelector('#headline')
var description = document.querySelector('#description')
var link = document.querySelector('#link')
var espnlink = document.querySelector('#espnlink')
var published = document.querySelector('#published')
liveevent.addEventListener("click", function(){
    newscard.style.display = "block";
    fetch("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
        var headlineval = data['articles'][0]['headline'];
        var descriptionval = data['articles'][0]['description'];
        var linkval = data['articles'][0]['links']['api']['news']['href'];
        var espnlinkval = data['link']['href'];
        var publishedval = data['articles'][0]['published'];
        var imageval = data['articles'][0]['images'][0]['url'];
        image.src=imageval
        headline.innerHTML= headlineval;
        description.innerHTML= descriptionval;
        link.innerHTML=linkval
        espnlink.innerHTML=espnlinkval
        published.innerHTML=publishedval
        
    })
})
