// create 
const ul = document.querySelector(`ul`);
const main = document.querySelector(`main`);
const li = document.createElement(`li`);
const cardOutline = document.createElement(`section`);
cardOutline.setAttribute(`style`, `height: 50; width: 500; background-color:
blue; text-align: center;`);


const state = {
    puppyNames: []
}

// create function to grab puppies
const getAllPuppies = async () => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
    const puppyInfo = await response.json();
    const puppyList = puppyInfo.results;
    console.log(puppyInfo)
    const newPuppyLi = li;
    state.puppyNames = puppyInfo.data.players
    newPuppyLi.innerText = puppyInfo.data.players[0].name;
  
    ul.appendChild(newPuppyLi);
    
    renderAllPuppies();
    
}
getAllPuppies()


const renderAllPuppies = () => {
    // create loop to add all puppy names to list

    for (i=0; i < state.puppyNames.length; i++){
        
        const li = document.createElement(`li`);
        const newCardPicLi = document.createElement(`img`);
        newCardPicLi.src = state.puppyNames[10].imageUrl;
        li.innerText = state.puppyNames[i].name
        ul.appendChild(li)
        const puppyHeader = document.createElement(`h2`)
        puppyHeader.innerText = state.puppyNames[1].name + ` ` + state.puppyNames[1].id + ` `
         + state.puppyNames[1].breed + ` ` + state.puppyNames[1].teamId + newCardPicLi
        

        // add event listener to list items to display puppy info
        li.addEventListener(`click`, () =>{
            cardOutline.appendChild(puppyHeader)

        })
    }
    

}


main.appendChild(cardOutline);