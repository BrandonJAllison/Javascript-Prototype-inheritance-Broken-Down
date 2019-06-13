/*Javascript Prototype inheritance Broken Down*/
/*Creating Base Object*/
function Animal(name,type)
{
    this.name = name;
    this.type = type;
    console.log(`Created new ${this.name} Prototype!`)// this will run when it is created
}
/*Adding methods to the Base Object*/
Animal.prototype.makeSound = function(sound)// this is the correct way to add methods to Animal | methods added to animal will be accesable down the scope
{
   return `${this.name} ${sound} at you!`;
}
/*Creating New Prototype Inherited From Base*/ 
Dog.prototype = Object.create(Animal.prototype)// this will create a new empty object  that is base on the Animal prototype

//but animal is just a constructor for itself 
//so you have to call the properties of Animal inside the Dog prototype
/*Calling Properties of Base to Dog*/
function Dog(name, type)// if you set params here >
{
    Animal.call(this, name, type)

}
/*Creating a new Object*/ 
let dog = new Dog("Dog", "Canine")// you have to make sure their here as well | also This returns  Created new ${this.name} Prototype! in Animal
/*Invoking Animal prototype methods*/
console.log(dog.makeSound("woofs"));


//create puppies from  dog class so puppies -> dog -> animal
/*Creating New Prototype Inherited From Dog*/
Puppy.prototype = Object.create(Dog.prototype)// this will create a new empty object that is based on the Dog prototype which is then based on the Animal prototype
/*Calling Properties of Dog to Puppy*/
function Puppy(name, type)
{
    Dog.call(this, name, type )
}
/*Creating a new Object*/ 
let puppy = new Puppy("Puppy", "Canine");//this returns  Created new ${this.name} Prototype! in Animal
/*Invoking Animal prototype methods*/
console.log(puppy.makeSound("woofs"))
