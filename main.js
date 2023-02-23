

const apiMange = new APIManager()
const renderer = new Renderer()


$("#display").click(function(){
    apiMange.getUserData()
    apiMange.getFriends()
    apiMange.getQoute()
    apiMange.getAboutSen()
    apiMange.getPokemon()

})
