//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
        this.renderer = new Renderer()
    }
    
    getUserData(){
        $.get("https://randomuser.me/api/")
        .then(res => {
            const firstName = res.results[0].name.first
            const lastName = res.results[0].name.last
            const city = res.results[0].location.city
            const country =res.results[0].location.country
            const img = res.results[0].picture.medium
            let userObj = {
                firstName, lastName , city, country, img
            }

            this.renderer.renderUserInfo(userObj)

        })
    }

    getFriends(){
        $.get("https://randomuser.me/api/?results=7")
        .then(friendsRes =>{
                let friends = []
                for (let i = 0; i < friendsRes.results.length; i++) {
                    const fname = friendsRes.results[i].name.first
                    const lname = friendsRes.results[i].name.last
                    let friend = {"firstname" : fname , "lastname" : lname}
                    friends.push(friend)
                }                    
                   this.renderer.renderFriends(friends)
        })
            }

     getQoute(){
                $.get("https://api.kanye.rest")
                .then(qoute => {
                    this.renderer.renderQuote(qoute)
                })
            }

    getAboutSen(){
                $.get("https://baconipsum.com/api/?type=all-meat&paras=1")
                .then(aboutSen =>{
                    this.renderer.renderAboutSen(aboutSen[0])
            })
            }

    getPokemon(){
                let pokemonNum = Math.floor(Math.random()*949)
                $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
                    .then(pokemonInfo =>{
                        let pokemon ={
                        name : pokemonInfo.forms[0].name,
                        url : pokemonInfo.sprites.front_default
                        }
                        this.renderer.renderPokemon(pokemon)
                    })   
                } 

}
