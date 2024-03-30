const main = document.querySelector('.char'); // Menggunakan class sebagai selector
// let htmlStringChar = "";
// for (let i = 0; i < CharAtt.length; i++) {
//   htmlStringChar += `<div class="char_card" data-category="${CharAtt[i][2]}" onclick="myFunction('${CharAtt[i][0]}')">
//   <img src="./Assets/Character/icon/${CharAtt[i][0]}_Icon.webp">
//   </div>`;
//   console.log(CharAtt[i][2]);
// }
// main.innerHTML = htmlStringChar; // Menggunakan htmlStringChar, bukan htmlStringHero


// function myFunction(characterId) {
//   var mainContent = document.querySelector('.main-content');
//   const hasilFilter = CharAtt.filter(character => character[0] === "Jean");
//   // Mengganti konten .main-content sesuai karakter yang diklik
//   mainContent.innerHTML = `
//     <img src="Assets/Character/full/${characterName}.png">
//     <div class="charposition">
//       <div class="char-preview">
//         <h1>${CharAtt[0]}</h1>
//         <p>=Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam iure atque autem distinctio ullam a ipsa, inventore architecto, nesciunt officia eaque perferendis cum debitis quae nobis vero eligendi fugiat? qywfh eqwqefwrg etteg avda vrqew rethryjqfeqefqwdqwefwww qfewrfqqegwwewreafsddeswgwewtqewrg</p>
//         <img src="Assets/Vision/geo.png">
//       </div>
//     </div>`;
// }