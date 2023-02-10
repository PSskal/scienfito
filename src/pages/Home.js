import getData from "../utils/getData";

const Home = async () => {
  
  const character = await getData();
       const view = `
         <div class="bg-red-500 w-full mx-auto p-2 flex  grid grid-cols-4">
         ${character.results.map(character =>`
         <article class="bg-blue-500">
             <a href="#/${character.id}/">
               <img src="${character.image}" alt="${character.name}">
               <h2>${character.name}</h2>
             </a>
           </article>
         `
         ).join('')}
         </div>`;
       return view;
     };
     
export default Home;

