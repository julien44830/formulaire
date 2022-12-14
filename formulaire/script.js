const firstName = document.getElementById("firstName");
console.log(firstName);
const lastName = document.getElementById("lastName");
const text = document.getElementById("text");


/*----------------------firstName------------------------------*/

firstName.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  event.target.style.color = "blue";
  firstName.classList.remove('utilisation');

});

firstName.addEventListener("blur", (event) => {
  event.target.style.background = "";
  event.target.style.color = "";
});


/*-----------------------lastName-----------------------------*/

lastName.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  event.target.style.color = "blue";
  lastName.classList.remove('utilisation');

});

lastName.addEventListener("blur", (event) => {
  event.target.style.background = "";
  event.target.style.color = "";
});


/*------------------------message----------------------------*/

text.addEventListener("focus", (event) => {
  event.target.style.background = "lightgrey";
  event.target.style.color = "purple";
});

text.addEventListener("blur", (event) => {
  event.target.style.background = "";
  event.target.style.color = "";
});


/***********************age*************************/
//verification de l'age
 
const age = document.getElementById('age');

age.addEventListener('focus',() =>{
  age.classList.remove('utilisation');
});

age.addEventListener('blur',() =>{
  const ageValue = age.value;
  
  if (isNaN(ageValue)){
      document.getElementById("ageP").innerText = "format non valide";  
      age.classList.add('utilisation');
  }else{
      if(ageValue < 1 || ageValue > 130){
        document.getElementById("ageP").innerText = "entré une valeur entre 1 et 130";
      }
      else if  (ageValue >= 18){
          document.getElementById("ageP").innerText = "vous êtes majeur";
          console.log(`vous avez ${ageValue} ans vous êtes majeur`);
          age.classList.remove('utilisation');
      }else {
          document.getElementById("ageP").innerText = "vous êtes mineur";
          console.log(`vous avez ${ageValue} ans vous êtes mineur`);
          age.classList.remove('utilisation');
      }
  };
});


/***************************MDP*****************************/
const mdp = document.getElementById('mdp');
const mdp2 = document.getElementById('mdp2');

mdp2.addEventListener('blur',(event) =>{
  if(mdp.value === mdp2.value){
    mdp2.classList.remove('utilisation');
  }else{
    mdp2.classList.add('utilisation');
  }
});

mdp.addEventListener('blur',() =>{
  var msg; 
  var mdpValue = document.getElementById("mdp").value; 
  console.log(mdpValue);

  if (mdpValue.match( /[0-9]/g) && 
      mdpValue.match( /[A-Z]/g) && 
      mdpValue.match(/[a-z]/g) && 
      mdpValue.match( /[^a-zA-Z\d]/g) &&
      mdpValue.length >= 10) 
      msg = "Mot de passe fort"; 
  else 
      msg = "Mot de passe faible"; 
  document.getElementById("mdpP2").innerText= msg; 
});


/**********************************radio***************************/
//offres promotionnelles

const radio = document.getElementsByName('radio');

for (var count=0; count<radio.length; count++){
  radio[count].addEventListener('change', (event) =>{
    alert(`${event.target.value}`);
  });
};


/************************************radio******************************/
// contact des equipes

const radio_2 = document.getElementsByName('radio_2');

for (var count=0; count<radio_2.length; count++){
  radio_2[count].addEventListener('change', (event) =>{
    alert(`${event.target.value}`);
  });
};


/************************select*******************/
//selection du genre

const genre = document.getElementById('genre');

genre.addEventListener('change', (event) =>{
  console.log(event.target.value);
  document.getElementById("select").innerText=`vous êtes ${event.target.value}`;
});


/************************verification**************************/
const btnValide = document.getElementById('btn');

btnValide.addEventListener('click', () =>{
  const input1 = document.getElementById('firstName');
  const inputValue1 = input1.value;
  const input2 = document.getElementById('lastName');
  const inputValue2 = input2.value.toUpperCase();
  const input = inputValue2 +" "+ inputValue1;
  const mdpValue = mdp.value;
  
  if(inputValue1.length && inputValue2.length > 0){
    input1.classList.remove('utilisation');
    input2.classList.remove('utilisation');
    /****************************************************email**********/ 
    if(isNaN(age.value) == false){
      // age.classList.add('utilisation');
      if(age.value.length > 0){
        age.classList.remove('utilisation');
        console.log(mdpValue.length);
        if(mdpValue.length > 0){
          mdp.classList.remove('utilisation');
          if(mdp.value === mdp2.value){
            mdp2.classList.remove('utilisation');
            if(checkbox.checked == true){
              if(Number(age.value >= 18)){
                console.log(`ton age ${age.value}`);
                age.classList.remove('utilisation');
                alert(`Merci ${input}, votre demande va être traitée plus rapidement que les services public`);
              }else{
                alert(`${inputValue1}, vous êtes mineur ! Les forces de l'ordre sont prévenues et ne vont pas tarder à arriver !`);
                age.classList.remove('utilisation');
              }
            }else{
              alert('veuiller accepter les conditions d\'utilisation');
            }
          }else{
            alert('Les mot de passes sont différent');
            mdp2.classList.add('utilisation');
          }
        }else{
          alert('entrer un mot de passe');
          mdp.classList.add('utilisation');
        }
      }else{
        alert ("entrer votre age");
        age.classList.add('utilisation');
      }
    }else{
      alert("votre format pour l'age n'est pas valide");
    }
  }else {
    alert('veuillez remplir votre nom et prénom');
    input1.classList.add('utilisation');
    input2.classList.add('utilisation');
  }
});