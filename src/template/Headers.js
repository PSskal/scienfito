const Header = () => {
       const view = `
         <div class="bg-blue-500 flex justify-center">
           <div class="bg-red-500">
             <h1 class="font-sans text-3xl">
               <a href="/">
                 home
               </a>
             </h1>
           </div>
           <div class="Header-nav">
             <a class="text-3xl"href="#/about/">
               About
             </a>
           </div>
         </div>
       `;
       return view;
     };
     
export default Header;