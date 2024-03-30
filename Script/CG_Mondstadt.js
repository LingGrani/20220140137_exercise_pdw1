const CharAtt = [
  ["Jean", "Mondstadt", "Anemo", "I am Jean, the Dandelion Knight, requesting approval to join your party. From this day onwards, my honor and loyalty lie with you."],
  ["Venti", "Mondstadt", "Anemo", "*Yawn* That was a refreshing sleep. Ah, Traveler, we meet again! What? You don't remember me? Ahaha, well, allow me to join you on your quest once again. I must see to it that the bards of the world tell the Traveler's tales!"],
  ["Albedo", "Mondstadt", "Geo", "a"],
  ["Amber", "Mondstadt", "Pyro", "a"],
  ["Barbara", "Mondstadt", "Hydro", "a"],
  ["Bennett", "Mondstadt", "Pyro", "a"],
  ["Diluc", "Mondstadt", "Pyro", "a"],
  ["Diona", "Mondstadt", "Cryo", "a"],
  ["Eula", "Mondstadt", "Cryo", "a"],
  ["Fischl", "Mondstadt", "Electro", "a"],
  ["Kaeya", "Mondstadt", "Cryo", "a"],
  ["Klee", "Mondstadt", "Pyro", "a"],
  ["Lisa", "Mondstadt", "Electro", "a"],
  ["Mika", "Mondstadt", "Cryo", "a"],
  ["Mona", "Mondstadt", "Hydro", "a"],
  ["Noelle", "Mondstadt", "Geo", "a"],
  ["Razor", "Mondstadt", "Electro", "a"],
  ["Rosaria", "Mondstadt", "Cryo", "a"],
  ["Sucrose", "Mondstadt", "Anemo", "a"]
];

const main = document.querySelector('.char'); // Menggunakan class sebagai selector
let htmlStringChar = "";
for (let i = 0; i < CharAtt.length; i++) {
  htmlStringChar += `<div class="char_card" data-category="${CharAtt[i][2]}" onclick="myFunction('${CharAtt[i][0]}')">
  <img src="./Assets/Character/icon/${CharAtt[i][0]}_Icon.webp">
  </div>`;
}
main.innerHTML = htmlStringChar; // Menggunakan htmlStringChar, bukan htmlStringHero


function myFunction(characterId) {
  var indexarr = CharAtt.findIndex(character => character[0] === characterId);
  var mainContent = document.querySelector('.main-content');
  //mencari indeks dari karakter"
  // Mengganti konten .main-content sesuai karakter yang diklik
  mainContent.innerHTML = `
    <img src="Assets/Character/full/${characterId}.png">
    <div class="charposition">
      <div class="char-preview">
        <h1>${CharAtt[indexarr][0]}</h1>
        <p>${CharAtt[indexarr][3]}</p>
        <img src="Assets/Vision/${CharAtt[indexarr][2]}.png">
      </div>
    </div>`;
  alert("Anda memilih char:  " + characterId);
}

