
class Renderer {

    constructor(){}

    renderUserInfo(userInfo){
        const source = $("#user-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template( userInfo);
        $(".user-container").empty().append(newHTML);
    }

     renderPokemon(pokemon){
        const source = $("#pokemon-template").html();
         const template = Handlebars.compile(source);
         let newHTML = template(pokemon);
         $(".pokemon-container").empty().append(newHTML);
     }

    renderQuote(quote){
        const source = $("#quote-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template(quote);
        $(".quote-container").empty().append(newHTML);
        
    }
   
    renderAboutSen(aboutSen){
        const source = $("#aboutSen-template").html();
         const template = Handlebars.compile(source);
         let newHTML = template({aboutSen});
         $(".meat-container").empty().append(newHTML);
     }
 
    renderFriends(friends){
        const friendsData = {
            friends : friends
        }
       const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template(friendsData);
        $(".friends-container").empty().append(newHTML);
        console.log(friends);
    }

   
}