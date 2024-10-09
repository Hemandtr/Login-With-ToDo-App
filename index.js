class Parent {
     
    setA() {
        console.log("from Parent")
     }
}

class Child extends Parent {
    setA(){
    console.log("this is from child");
}
}

parent = new Child();
parent.setA()


class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows.");
    }
}

const animals = [new Dog(), new Cat()];


    new Dog().speak();  // Dog barks, Cat meows




