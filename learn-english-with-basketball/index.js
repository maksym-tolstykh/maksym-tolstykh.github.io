const categories = document.querySelector('.categories');
const curr_cat = document.querySelector('.curr_cat');
const genereteLetterButton = document.querySelector('#generete_letter_button');
const resetCookieButton = document.querySelector('#reset_cookie_btn');


//Кнопки категорій
const cat1 = document.querySelector('#c1'); //random letter


cat1.addEventListener('click',(e)=>{
    curr_cat.style.visibility = 'visible';
    categories.style.display = 'none';
});


//#region 

const charCookie  = document.cookie.match(new RegExp(
    "(?:^|; )" + "characters".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let characters = charCookie ? decodeURIComponent(charCookie[1]) : letters;

if(characters === ""){
    genereteLetterButton.style.display = "none";
    resetCookieButton.style.display = "block";
}
else{
    resetCookieButton.style.display = "none";
    genereteLetterButton.style.display = "block";
}

/*Кнопка генерації букв */
genereteLetterButton.addEventListener('click',()=>{

    if (characters === "") {
        console.log("всі букви закінчились!!");
        resetCookieButton.style.display = "block";
        genereteLetterButton.style.display = "none";
    }
    
    let result = characters.charAt(Math.floor(Math.random()* characters.length));
    const resultTag = document.querySelector('.curr_cat p');
    characters = characters.replace(result,"")
    resultTag.innerHTML = (result);
    document.cookie = "characters" + "=" + encodeURIComponent(characters);
});
//#endregion

resetCookieButton.addEventListener('click',()=>{
    console.log("reset");
    deleteCookie("characters");
    resetCookieButton.style.display = "none";
    genereteLetterButton.style.display = "block"
    
    
});

function deleteCookie(name){
    document.cookie=name+'=; expires='+Date()+';'+'path=/;';
    characters = letters;
}


