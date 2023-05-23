let x = 10
let y = 23
let z = 31
let c = 315
let d = 90

console.log(x + y +z +c +d)

let person1 = {
    fullName: "merab dvaliShvili",
    age: "26",
    address: {
        country: "tbilisi"
    }
};
let person2 = {
    fullName: "john jones",
    age: "36",
    address: {
        country: "america"
    }
};
let person3 = {
    fullName: "xvicha kvaracxelia",
    age: "22",
    address: {
        country: "tbilisi"
    }
};

let persons = [person1, person2, person3];

console.log(`my name is ${persons[0].fullName} my age is ${persons[0].age} my address is ${persons[0].address.country}`)
console.log(`my name is ${persons[1].fullName} my age is ${persons[1].age} my address is ${persons[1].address.country}`)
console.log(`my name is ${persons[2].fullName} my age is ${persons[2].age} my address is ${persons[2].address.country}`)

if(
    person1.age <= 18
) {
    console.log(`i am teenager`);
} 
else {
    console.log(`am an adult`);
}

let str = '63 32 12 43 49';
for (let i = str; i < str; i++) {
  str = str + i;
}

console.log(str);

