class Pet {
   constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
   }
 speak() {
     console.log(this.sound);
 }   
}
//aki vamos a meter a una mascota nueva
//en vez de tipear retoa la wea pa crear un objeto, tipeas esto y se crea.
const tommy = new Pet ('dog', 5, 'stray', 'wuf');
const picho = new Pet ('parrot', 6, 'galah', 'picho');
const alex = new Pet ('parrot', 'unknown', 'alexandrine', 'pukekohe');
const pipi = new Pet ('bird', '4 months', 'sparrow', 'mi');

tommy.speak();
alex.speak();
picho.speak();

//getter method
get activity() {
const today = new Date();
const hour = today.getHours();

if(hour > 8 && hour <= 20) {
    return 'playing';
} else { 
    return 'sleeping';
}
}

console.log(pipi.activity);
//no me sirvio, pero sirve pa que cuando accedes
//a un objeto puedes ver q hacer ese objeto
// a que hora x ejemplo, y te da un value
//sleeping, pero ese sleeping no esta
//guardado en el objeto en si, hmmmmm


/*
class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
  stringGPA(){
    return this.gpa.toString()
  }
}

const student = new Student(3.9);
*/