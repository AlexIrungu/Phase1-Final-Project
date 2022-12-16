// let url = 'https://api.openbrewerydb.org/breweries/random'
// // const button = document.querySelector('.container button')
// // //const drinkText = document.querySelector('.container p')

// // button.addEventListener('click',getDrink)

// // function getDrink(){

// // }
// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')

// form.addEventListener('submit',(e) => {
//     let messages = []
    
// })

// document.addEventListener('DOMContentLoaded',init)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        //we console log and the page refreshes. 
        //console.log(e)
        //we then add a prevent event to remove the default behaviour of the html form
        e.preventDefault()
        //we console log to check the submit event
        console.log(e.target);
    })
})