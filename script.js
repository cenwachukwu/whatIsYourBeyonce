// giphy data base for beyonce rated R
const url1 = "https://api.giphy.com/v1/gifs/search?api_key=5VHD8krqyXl6NCnL26GYoLw8yxwc9NH8&q=beyonce&limit=500&offset=0&rating=R&lang=en"
fetch(url1)
    .then (res => res.json())
    .then (res => console.log(res))
    .catch (err => console.log (err))

// itunes but it has only the beyonce album and 
const url2 = "https://itunes.apple.com/search?term=beyonce"
    fetch(url2)
    .then (res => res.json())
    .then (res => console.log(res))
    .catch (err => console.log (err))

// this site has lyrics but you can't grab for the whole artist
const url3 = "https://api.lyrics.ovh/v1/beyonce/1+1/"
    fetch(url3)
    .then (res => res.json())
    .then (res => console.log(res))
    .catch (err => console.log (err))

const url4 = "https://api.giphy.com/v1/gifs/random?api_key=5VHD8krqyXl6NCnL26GYoLw8yxwc9NH8&tag=beyonce&rating=G"
const randomButton = document.querySelector(".randomButton")
randomButton.addEventListener("click", function(evt){
    evt.preventDefault()
    fetch(url4)
        .then (res => res.json())
        .then (res => {
            //console.log(res.data)
            //console.log(res.data.image_url)
            let randomBeyonce = res.data.image_url
            console.log(randomBeyonce)
            document.querySelector(".randomBeyonceImage").src = randomBeyonce;
        })
        .catch (err => console.log (err))
})

// document.querySelector(".randomCatImage").src = catPic;
