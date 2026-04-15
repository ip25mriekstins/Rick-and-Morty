let page=1;
document.getElementById("page").innerHTML="Page: "+page;
function goToFirstPage(){
  page=1;
  console.log(page);
  const div = document.querySelectorAll('.content-characters-inner-kastes')
  div.forEach(div => div.remove())
  makeBoxes();
  window.scrollTo(0, 0);
  document.getElementById("page").innerHTML="Page: "+page;
}

function goToLastPage(){
  page=42;
  console.log(page);
  const div = document.querySelectorAll('.content-characters-inner-kastes')
  div.forEach(div => div.remove())
  makeBoxes();
  window.scrollTo(0, 0);
  document.getElementById("page").innerHTML="Page: "+page;
}

function goToNextPage(){
  if(page==42){
    page=42;
  }else{
  page++;
  console.log(page);
  const div = document.querySelectorAll('.content-characters-inner-kastes')
  div.forEach(div => div.remove())
  makeBoxes();
  window.scrollTo(0, 0);
  document.getElementById("page").innerHTML="Page: "+page;
}
}

function goToPrevPage(){
  if(page==1){
    page=1;
  }else{
  page=page-1;
  console.log(page);
  const div = document.querySelectorAll('.content-characters-inner-kastes')
  div.forEach(div => div.remove())
  makeBoxes();
  window.scrollTo(0, 0);
  document.getElementById("page").innerHTML="Page: "+page;
}
}

document.getElementById("first-page-btn").addEventListener("click", goToFirstPage);
document.getElementById("last-page-btn").addEventListener("click", goToLastPage);
document.getElementById("next-page-btn").addEventListener("click", goToNextPage);
document.getElementById("prev-page-btn").addEventListener("click", goToPrevPage);

function makeBoxes(){
fetch('https://rickandmortyapi.com/api/character/?page='+[page])
.then(response => response.json())
.then(characters => {
  renderCharacters(characters.results)
  console.log(characters.results)
})
    const cardsContainer = document.querySelector('#content-characters-inner');
    function renderCharacters(characters) {
      characters.forEach(character => {
        const div = document.createElement('div');
        const imgdiv = document.createElement('div');
        const textdiv = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const species = document.createElement('h3');
        const last = document.createElement('h3');
        const idkk = document.createElement('h3');
        const first = document.createElement('h3');
        const episode = document.createElement('h3');
        const statusImg = document.createElement('img');
        
        div.className = 'content-characters-inner-kastes'
        image.classList = 'content-characters-inner-kastes-bilde'
        last.className = 'Virsraksti'
        first.className = 'Virsraksti'
        statusImg.className = 'statusImg'

        image.setAttribute("alt","CharacterImages");
        statusImg.setAttribute("alt","StatusImage")


        let StatusImg;
        if (character.status=="Alive"){
         StatusImg = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Green_Dot_%28Active%29.png";
        }else if (character.status =="Dead"){
         StatusImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Simple_red_circle.svg/500px-Simple_red_circle.svg.png";
        }else{
          StatusImg = "https://cdn-icons-png.flaticon.com/512/5720/5720434.png"
        }

        image.src = character.image
        name.innerText = character.name
        species.innerText = character.status + " - " + character.species 
        last.innerText ="Last known location:"
        idkk.innerText = character.location.name
        first.innerText = "Origin:"
        episode.innerText = character.origin.name
        statusImg.src = StatusImg


        div.appendChild(imgdiv)
        div.appendChild(imgdiv)
        div.appendChild(textdiv)
        imgdiv.appendChild(image)
        textdiv.appendChild(name)
        species.appendChild(statusImg)
        textdiv.appendChild(species)
        textdiv.appendChild(last)
        textdiv.appendChild(idkk)
        textdiv.appendChild(first)
        textdiv.appendChild(episode)
        cardsContainer.appendChild(div)
        
      });
    };
}

document.getElementById("scrolldown-btn").addEventListener("click", ToBottom);

function ToBottom(){
  window.scrollTo(0,2726)
}

makeBoxes();