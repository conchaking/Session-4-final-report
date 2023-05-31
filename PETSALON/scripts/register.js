//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        country:"Mexico",
        city:"Tijuana",
        zip:"23456"
    },
    phone:"6659987311",
    pet:[]
   
        }
function Pet(name,age,gender,breed,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}
//get the inputs from the HTML

let inputName = document.getElementById(`txtName`);
let inputAge = document.getElementById(`txtAge`);
let inputGender = document.getElementById(`txtGender`);
let inputBreed = document.getElementById(`txtBreed`);
let inputService = document.getElementById(`txtService`);

function isValid(aPet){
    //we need to assume that the valid pet is true
    let valid = true;
    if(aPet.name == " ")
    {
        //if you get here it means the pet is not valid
        valid = false;
        inputName.classList.add("Error");
    }
    return valid;

}

function register(){
    //create the obj
    console.log("hello im the register");
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    if(isValid(newPet))
    {
        petSalon.pet.push(newPet);
        displayPetCard();
    }
    //display the object
    console.log("newPet");
    petSalon.pet.push(newPet);
}
        //attributes

    function init(){
    let scooby = new Pet("Sally","60","They","Pitbull","Sexchange");
    let scrappy = new Pet("Mark","40","Male","Persian","grooming"); 
    petSalon.pet.push(scrappy,scooby); 
    displayPetCard();
  
    console.log(scooby,scrappy);
    // creating new objects using the constructor Student
}

window.onload=init;//wait to render the HTML