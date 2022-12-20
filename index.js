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
    

//form dom manipulation
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('form').addEventListener('submit', (e) => {
//         //we console log and the page refreshes. 
//         //console.log(e)
//         //we then add a prevent event to remove the default behaviour of the html form
//         e.preventDefault()
//         //we console log to check the submit event
//         console.log(e.target.enter_email.value)
//     })
// })

// function handleEmail(email){
//     //console.log(email)
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//     btn.textContent = 'x'
//     p.appendChild(btn)
//     p.textContent = `${email}`
//     //console.log(p);
//     document.querySelector('#email_container').appendChild(p)
// }

function appendLoginPage () {
    
    document.querySelector('body').innerHTML = 
    `<header id="showcase">
    
    <form id="login_form">
    <div class="field">
    <label>Email address</label>
    <br>
    <input id="enter_email" type="text" placeholder="Enter Email"><br><br>
    </div>
    <div>
    <label>Password</label><br>
    <input id="enter_password" type="password" placeholder="Enter Password"><br><br>
    </div>
    <input id="submit-btn" type="submit"  class="btn text-bg-success" value="Submit"/>
   
    </form>
    </header>`
    
    document.getElementById("submit-btn").addEventListener('click', () => {
        
        let mailValue = document.getElementById('enter_email').value
        let passValue = document.getElementById('enter_password').value
        if(mailValue !== "" && passValue !== ""){
            appendHomePage()
        // document.querySelector('body').innerHTML = ""
        // document.querySelector('body').innerHTML = ` 
        // <nav class="navbar text-bg-dark">
        //     <div class="container-fluid">
        //         <a class="navbar-brand text-light">HOME</a>
        //         <ul class="navbar-nav me-auto d-flex flex-row">
        //             <li class="nav-item me-2">
        //                 <a class="nav-link text-light" href="#" id="brew-link">BREW</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link text-light" href="#" id="countries-link">COUNTRIES</a>
        //             </li>
    
        //         </ul>
        //         <form class="d-flex">
        //             <input class="form-control" type="text" placeholder="Search" id="search"/>
        //             <button class="btn btn-outline-info" id="searchBtn">Search</button>
    
        //         </form>
    
        //     </div>
    
        // </nav>
        // <div class="container mt-5" id="main-container">
        //     <div class="row" id="random-drink">
                
    
        //     </div>
        //     <div class="row" id="brew-type">
        //         <div class="card col-5" >
        //             <img src="./brew.jpeg" alt=""/>
        //             <h4 class="card-name">Brew</h4>
    
        //         </div>
        //     </div>
        //     <div class="row" id="drink-countries">
        //         <span class="col-2 me-1 mb-1">Kenyan</span>
    
        //     </div>
        //     <div class="drink"></div>
        //     <button>Get drink</button>
           
        // </div> `
    }else if(mailValue === "" || passValue === ""){
        //document.querySelector('body').innerHTML = 'error'
        alert("ERROR")
    }


    })
}
appendLoginPage()

function appendHomePage (){
    // document.querySelector('body').innerHTML = ""
    document.querySelector('body').innerHTML = ` 
    <nav class="navbar text-bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light">HOME</a>
            <ul class="navbar-nav me-auto d-flex flex-row">
                <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#" id="brew-link">BREW</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#" id="countries-link">COUNTRIES</a>
                </li>

            </ul>
            <form class="d-flex">
                <input class="form-control" type="text" placeholder="Search" id="search"/>
                <button class="btn btn-outline-info" id="searchBtn">Search</button>

            </form>

        </div>

    </nav
    <div class="container mt-5" id="main-container">
        <div class="row" id="random-drink">
            

        </div>
        <div class="row" id="brew-type">
            <div class="card col-5" >
                <img src="./brew.jpeg" alt=""/>
                <h4 class="card-name">Brew</h4>

            </div>
        </div>
        <div class="row" id="drink-countries">
            <span class="col-2 me-1 mb-1">Kenyan</span>

        </div>
        <div class="drink"></div>
        <button>Get drink</button>
        loadRandomDrink()
    </div> `
    

}


//appendHomePage()

})