const categories = document.querySelector('.categories');
const curr_cat = document.querySelector('.curr_cat');
const genereteLetterButton = document.querySelector('#generete_letter_button');


//Кнопки категорій
const cat1 = document.querySelector('#c1'); //random letter


cat1.addEventListener('click',(e)=>{
    curr_cat.style.visibility = 'visible';
    categories.style.display = 'none';
});


genereteLetterButton.addEventListener('click',()=>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = characters.charAt(Math.floor(Math.random()* characters.length));
    const resultTag = document.querySelector('.curr_cat p');
    resultTag.innerHTML = (result);
    console.log(result);
   
    
   
});
