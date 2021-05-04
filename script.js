const joke = document.getElementById('joke');
const button = document.getElementById('jokeBtn');


button.addEventListener('click', generateJoke)

async function  generateJoke() {
    const config = {
        headers: {
        'Accept': 'application/json'
        }
    }

    const responce = await fetch('http://icanhazdadjoke.com', config)
    
    const data = await responce.json()
   
    joke.innerHTML = data.joke
}

/*function generateJoke() {
    const config = {
        headers: {
        'Accept': 'application/json' 
        }
    };

    fetch('http://icanhazdadjoke.com', config)
        .then((responce) => responce.json())
        .then((data) => {
            console.log(data)
        });


}*/