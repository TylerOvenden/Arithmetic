const para = document.querySelector('.name');

//console.log(para);

const para2 = document.querySelector('p');
//para2.innerText += " added this";
//console.log(para2);

//these do the same thing but first could overwrite previous style settings
//para2.setAttribute('style', 'margin: 50px');
para2.style.margin = '50px';
const para3 = document.querySelectorAll('p');

para3.forEach(para =>{

    console.log(para.innerText);
    para.innerText += " added more stuff";
})


//get specific element from para3
//console.log(para3[0]);