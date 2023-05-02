let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);

let url = "https://proxy-itunes-api.glitch.me/search?term=";

// function getBaseApi(url) {

    searchButton.addEventListener('click', (event) => {
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
        
        .then(function (data){
            console.log(data)
            
        });
        

        // outPut.value += button.innerText
        // problem += event.target.innerText
        // outPut.value = problem;
});