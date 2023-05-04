let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);
let songsDiv = document.querySelector("#songs");
let playSong = document.querySelector("songPreview.src");
let searchButton = document.querySelector("#searchButton");
let audioTag = document.querySelector("#audioTag");

let url = "https://proxy-itunes-api.glitch.me/search?term=";
    
    searchButton.addEventListener('click', (event) => {
        console.log(searchButton)
        event.preventDefault()
        let searchField = document.querySelector("#searchField")
        url += searchField.value
        console.log(url)    
           

        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
            return response.json();
        })
        .then ((data) => {
            let songs = data.results;
            console.log(data);
            
            //loop
            for (let song of songs) {
                //Create Elements
                let songEl = document.createElement("div");
                let artworkImg = document.createElement("img");
                let songPreview = document.createElement("a")
                
                //Create sytling classes
                artworkImg.classList.add("artworkImg")
                songPreview.classList.add("songPreview")
                songEl.classList.add("card")

                //Display elements of songs
                artworkImg.src = song.artworkUrl60
                songPreview.href = song.previewUrl
                songPreview.innerText = song.trackName
                
                //Append Children
                songsDiv.appendChild(songPreview)
                songEl.appendChild(artworkImg)
                songsDiv.appendChild(songEl)
                mainContainer.appendChild(playButton)

                //Event Listener
            songPreview.addEventListener('click', (event) => {
                event.preventDefault()
                audioTag.src = event.target.href
        })
            }
        })
           });    