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

    //load drink categories
   
   
    loadRandomDrink()
//function that lists the brews

    function brewNew(){
        

    }
    brewNew()
    //calling the function
    document.querySelector("#NEW").addEventListener('click',()=>{
        console.log('clicked');
        fetch("https://api.openbrewerydb.org/breweries/random")
        .then((response)=>response.json())
        .then((datas)=>{
            const newsItems = datas[0]
            console.log(newsItems);
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

    })
   

    //adding a click event to the search button
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
            //add a click event
            const drinking = document.getElementById('drinking')
            const Btn= document.getElementById('Btn')
            Btn.addEventListener('click',()=>{
                drinking.textContent= 'Thank you for purchasing'
            })
        })
        })
    })
    //adding functionality to the landing and home page
    const showcase= document.getElementById('showcase')
    const background= document.getElementById('background')
    const Btnbtn = document.getElementById('submit_btn')
    Btnbtn.addEventListener("click",(e)=>{
        e.preventDefault()
        background.style.display = "flex"
        background.removeAttribute('hidden')
        showcase.style.display = "none"
    })

    //load category elements
    
    const category = document.getElementById('category')
    const categories = document.getElementById('categories')
    categories.addEventListener('click',()=>{
        fetch('https://api.openbrewerydb.org/breweries')
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data);
            data.forEach(items=>{
                // console.log(items);
                const itemName = items.name
                // console.log(itemName)
               
               const types = document.createElement('li')
               types.innerHTML = items.name
               brew_type.appendChild(types)
               console.log(brew_type);
            
            })
        })
    })
    
})