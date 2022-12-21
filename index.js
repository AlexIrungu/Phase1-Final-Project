 // URLS
 //1.Random Drink
 const RANDOM_DRINK = 'https://api.openbrewerydb.org/breweries/random'

//to listen to DOM loading event
document.addEventListener('DOMContentLoaded', () => {
    //create random drink element
    
    const createRandomDrink = (type, title, city) => {
        //creating card div
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-20')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const typeDiv = document.createElement('div')
        typeDiv.classList.add('col-10')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-10', 'card-body')

        const drinkType = document.createElement('type')
        drinkType.classList.add('card-type')
        drinkType.src = type

        const drinkTitle = document.createElement('h5')
        drinkTitle.classList.add('card-title')
        drinkTitle.innerText = title

        const drinkCity = document.createElement('h7')
        drinkCity.classList.add('card-city')
        drinkCity.innerText = city
        //apend body elements
        bodyDiv.appendChild(drinkTitle)
        bodyDiv.appendChild(drinkCity)
        //append type
        typeDiv.appendChild(drinkType)

        //append divs to row
        rowDiv.appendChild(typeDiv)
        rowDiv.appendChild(bodyDiv)

        //append row to card
        cardDiv.appendChild(rowDiv)
        //return the cardDiv
        return cardDiv
    }
    //load random drink
    function loadRandomDrink() {
        fetch(RANDOM_DRINK)
        .then((res) => res.json())
        .then((data) => {
            //test to see if its fetching
            //console.log(data);
             const drinkData = data
            //test to see if the drinks data is fetching
             //console.log(drinkData);
             const type = drinkData.brewery_type
             const title = drinkData.name
             const city = drinkData.city
             const drinkElement = createRandomDrink(type, title, city)
             //document.getElementById('random-drink').appendChild(drinkElement)
            
        })
    }
    loadRandomDrink()


    function brewNew(){
        fetch("https://api.openbrewerydb.org/breweries")
        .then((response)=>response.json())
        .then((datas)=>{
            datas.map(newsItems=>{
                console.log(newsItems);
                const brew_type = document.getElementById('brew_type')
                brew_type.innerHTML = `
                <ul>
                <li>${newsItems.state}</li>
                <li>${newsItems.name}</li>
                <li>${newsItems.city}</li>
                <li>${newsItems.country}</li>
                <span id="drinking" class = "bg-info" ></span>
                </ul>
                
                `
                const drinking = document.getElementById('drinking')
                const Btn= document.getElementById('Btn')
                Btn.addEventListener('click',()=>{
                    drinking.textContent= 'Thank you for purchasing'
                })
            })
        })


    }
    brewNew()

    const search = document.getElementById('search')
    const searchBtn = document.getElementById('searchBtn')
       
    searchBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        const search = document.getElementById('search')
        const value = search.value
        fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${value}`)
        .then((response)=>response.json())
        .then((data)=>{
            const brew_type = document.getElementById('brew_type')
            data.forEach(data=>{
            brew_type.innerHTML = `
            <ul>
            <li>${data.id}</li>
            <li>${data.name}</li>
            
            <span id="drinking" class ="bg-info" ></span>
            </ul>
            
            `
            const drinking = document.getElementById('drinking')
            const Btn= document.getElementById('Btn')
            Btn.addEventListener('click',()=>{
                drinking.textContent= 'Thank you for purchasing'
            })
        })
        })
    })
    const showcase= document.getElementById('showcase')
    const background= document.getElementById('background')
    const Btnbtn = document.getElementById('submit_btn')
    Btnbtn.addEventListener("click",(e)=>{
        e.preventDefault()
        background.style.display = "flex"
        background.removeAttribute('hidden')
        showcase.style.display = "none"

    })




})