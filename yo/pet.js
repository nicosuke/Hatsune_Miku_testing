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

const tommy = new Pet ('dog', 5, 'stray', 'wuf');
//en vez de tipear retoa la wea pa crear un objeto.

tommy.speak();

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