//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getCard)

function getCard(){
    
    fetch(`https://protected-taiga-89091.herokuapp.com/api/card?pageSize=10&page=3`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let randoNum = Math.floor(Math.random()* 10 + 1)
    
      document.querySelector('h2').innerText = data.data[randoNum].Rōmaji
      document.querySelector('img').src = data.data[randoNum].sakuraCard
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    
  }
