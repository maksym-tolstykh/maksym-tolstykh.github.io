const categories = document.querySelector('.categories');
const curr_cat = document.querySelector('.curr_cat');
const topButton = document.querySelector('.top');
const backSymbol = document.querySelector('.back_to_main');


//Кнопки категорій
const cat1 = document.querySelector('#c1'); //random letter


cat1.addEventListener('click', (e) => {
    curr_cat.style.display = 'flex';
    categories.style.display = 'none';
    topButton.setAttribute("id", "backbtn")
    backSymbol.style.display='block';
});


//#region Категорія "Генерація букв"
const genereteLetterButton = document.querySelector('#generete_letter_button');
const resetCookieButton = document.querySelector('#reset_cookie_btn');
const allLetters = document.querySelector('.all_letters');

const charCookie = document.cookie.match(new RegExp(
    "(?:^|; )" + "characters".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
))
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let characters = charCookie ? decodeURIComponent(charCookie[1]) : letters;

if (characters === "") {
    genereteLetterButton.style.display = "none";
    resetCookieButton.style.display = "block";
}
else {
    resetCookieButton.style.display = "none";
    genereteLetterButton.style.display = "block";
}
allLetters.innerHTML=characters;

    /*Кнопка генерації букв */
genereteLetterButton.addEventListener('click', () => {

    if (characters === "") {
        console.log("всі букви закінчились!!");
        resetCookieButton.style.display = "block";
        genereteLetterButton.style.display = "none";
    }

    let result = characters.charAt(Math.floor(Math.random() * characters.length));
    const resultTag = document.querySelector('.generated_letters');
    characters = characters.replace(result, "")
    resultTag.innerHTML = (result);
    allLetters.innerHTML=characters;
    document.cookie = "characters" + "=" + encodeURIComponent(characters)+"; max-age=7200;";
});
resetCookieButton.addEventListener('click', () => {
    console.log("reset");
    deleteCookie("characters");
    resetCookieButton.style.display = "none";
    genereteLetterButton.style.display = "block"


});
//#endregion

topButton.addEventListener("click",()=>{
    if(topButton.getAttribute("id")){
        backToMain(curr_cat,categories);
    }
})

function backToMain(closeElement, openElement){
    closeElement.style.display = 'none';
    openElement.style.display = 'flex';
    backSymbol.style.display='none';
}



function deleteCookie(name) {
    document.cookie = name + '=; expires=' + Date() + ';' + 'path=/;';
    characters = letters;
    console.log("deleteCookie");
}


