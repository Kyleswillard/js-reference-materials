//Object-Oriented Programming (OOP)


// Factory Functions

function createCircle(radius, location){
    return {
        radius: radius,   
        draw(){
            console.log('draw')
        }             
    }; 
}; 


const circle1 = createCircle(1);
console.log(circle1)


circle2 = createCircle(2);
console.log(circle2);

//Constructor Functions - use PascalNotation
// Pascal Notation = OneTwoThreeFour
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(draw);
    }
}

const circle = new Circle(1);

// Both work great, constructor is more familiar for other language devs. No real differences.

// Objects are Dynamic 
const circle = {
    radius: 1
}

circle.color = 'yellow';
circle.draw  = function(){};

delete circle.color;
delete circle.draw;


console.log(circle);


// Constructor Property 

//references the function used to create object
// circle.constructor
//let x = {} =  let x = new Object();


