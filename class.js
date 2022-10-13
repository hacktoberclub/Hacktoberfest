/*
we are going to create a class and use it as a greet to introduce yourself to the open source world
happy hacking! ill go first
*/
// this is my class that created  to gather my name, what i do, and a message to open source:)
class Person{
  constructor(fname,occupation,message){
    this.fname = fname;
    this.occupation = occupation;
    this.message = message;
  }
// this is my method to use to use as a greeting 
  greet(){
    console.log(`Hello My name is ${this.fname} i am a ${this.occupation} and my message to open source is ${this.message} Happy hacking!`);
  }
}
// here we have created a new class using the person class, entering all the info in the order as it was entered in the constructor.
const Ezra = new Person("Ezra","coordinator", "I Hope everyone is having an amazing time doing hacktoberfest");

console.log(Ezra.greet());
// console.log(Ezra);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// now it's your turn happy hacking!