 //let url = 'https://api.openbrewerydb.org/breweries/random'
//to listen to DOM loading event
document.addEventListener('DOMContentLoaded', () => {
    //create random drink element
    const createRandomDrink = (type, title, city) => {
        //creating card div
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-20')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')
    }
})

//form dom manipulation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        //we console log and the page refreshes. 
        //console.log(e)
        //we then add a prevent event to remove the default behaviour of the html form
        e.preventDefault()
        //we console log to check the submit event
        console.log(e.target.enter_email.value)
    })
})

function handleEmail(email){
    //console.log(email)
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.textContent = 'x'
    p.appendChild(btn)
    p.textContent = `${email}`
    //console.log(p);
    document.querySelector('#email_container').appendChild(p)
}

