const films=[
    { name:"Earwig and the Witch ",realisateur: "Gorō Miyazak"},
    {name:"The Red Turtle" ,realisateur:"Michaël Dudok de Wit"},
   {name:" When Marnie Was There" ,realisateur:"Hiromasa Yonebayashi"},
   {name: "The Tale of the Princess Kaguya" , realisateur:"Isao Takahata"},
    {name:"The Wind Rises" ,realisateur:"Hayao Miyazaki"},
    {name:"From Up on Poppy Hill ",realisateur:"Gorō Miyazaki"},
    {name:"Arrietty ",realisateur:" Hiromasa Yonebayashi"},
    {name:"Ponyo ",realisateur:"Hayao Miyazaki"},
   {name:" Tales from Earthsea" ,realisateur:"Gorō Miyazaki"},
   {name:"Howl's Moving Castle" ,realisateur:"Hayao Miyazaki"},
   {name:"The Cat Returns ",realisateur:"Hiroyuki Morita"},
   {name:"Spirited Away" ,realisateur:"Hayao Miyazaki"},
   {name:"My Neighbors the Yamadas ",realisateur:" Isao Takahata"},
   {name:"Princess Mononoke ",realisateur:"Hayao Miyazaki"},
   {name:"Whisper of the Heart" ,realisateur:" Yoshifumi Kondō"},
   {name:" Pom Poko ",realisateur:" Isao Takahata"},
   {name:"Porco Rosso ",realisateur:"Hayao Miyazaki"},
   {name:"Only Yesterday ",realisateur:"Isao Takahata"},
   {name:"Kiki's Delivery Service ",realisateur:"Hayao Miyazaki"},
   {name:"My Neighbor Totoro ",realisateur:"Hayao Miyazaki"},
   {name:"Grave of the Fireflies" , realisateur:"Isao Takahata"},
   {name:"Castle in the Sky ",realisateur:"Hayao Miyazaki"}
    
];

//PARTIE 1
 const listFilm=document.getElementById("filmsBy");
  function newitem(film){
 const li_item=document.createElement("li");
     li_item.textContent=`${film.name} : ${film.realisateur}`;
     if(film.realisateur==="Hayao Miyazaki"){
       li_item.classList.add("red");
      
     }
   listFilm.appendChild(li_item);
   };
     for (let film of films){
    newitem(film)};
// // PARTIE 2
//fonction qui récupére les différents  directeurs 
const  directors=document.getElementById("directors");
let directeurs=films.reduce((acc,{realisateur})=>new Set([...acc,realisateur]),new Set())
directeurs = Array.from(directeurs);

console.log(  Array.from(directeurs) );
 const resultatHTML = directeurs.map(realisateur => `<li>${realisateur}</li>`).join('');
 directors.innerHTML = resultatHTML;
/// PARTIE 3
// function qui associe chaque film à son  réalisateur
    const dir_liste=films.reduce(function(acc,film){
     if(!acc[film.realisateur]) acc[film.realisateur]=[];
     acc[film.realisateur].push(film.name);
     return acc}
     ,{});
  
const sortedDirectors = Object.keys(dir_liste).sort((a, b) => dir_liste[a].length - dir_liste[b].length);
// Parcourez les clés triées et affichez les résultats dans le DOM
sortedDirectors.forEach(director => {
    const movies = dir_liste[director];

     // Créez un élément HTML pour chaque réalisateur
     const directorElement = document.createElement('div');
     //Ajoutez le nom du réalisateur et le nombre de films comme paragraphe
     const directorInfo = document.createElement('li');
    directorInfo.textContent =  director;
     directorElement.appendChild(directorInfo);
    
    const moviesList = document.createElement('ul');
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.classList.add("direc");
        movieItem.textContent = `Film: ${movie}`;
        moviesList.appendChild(movieItem);
    });
    directorElement.appendChild(moviesList);

   // Ajoutez l'élément créé 
    document.body.appendChild(directorElement);
});