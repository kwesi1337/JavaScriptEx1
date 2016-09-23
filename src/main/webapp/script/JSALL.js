// Opgave 1

var boolean = true;
console.log(boolean);

var number = 1;
console.log(number);

var string = "A string";
console.log(string);

var array = [2, 3, 4, 5];
console.log(array);

var object = {hello: 2, name: "Hans"};
console.log(object);



// Opgave 2

var multiArray = [string, number, object, boolean];
console.log("Array: " + multiArray);



//Opgave 3

var twoPropObject = {studentID: 3, studentName: "Jan"};

function objToString(object) {

    return object.studentID + "." + object.studentName;

}
;
console.log("toString: " + objToString(twoObject));

var twoObject = {studentID: 3, studentName: "Jan"};


var threeObject = {studentID: 4, studentName: "Gahba", grade: 00};

function iteratorToString(object) {

    var stringBuilder = "";

    for (var key in object) {

        if (object.hasOwnProperty(key)) {

            stringBuilder += object[key] + ".";
        }
    }

    return stringBuilder.substring(0, stringBuilder.length - 1);
}

console.log("Iterator toString: " + iteratorToString(threeObject));





// Opgave 4

function Student(name, age, isFemale) {


    this.name = name;
    this.age = age;
    this.isFemale = isFemale;

}

var student1 = new Student("Mads", 50, false);
var student2 = new Student("Janne", 30, true);
var student3 = new Student("Mikkeline", 20, true);
var student4 = new Student("Mikkel", 10, false);
var student5 = new Student("Mads-henrik", 59, false);
var student6 = new Student("Mie-helena", 20, true);
var student7 = new Student("Mads-henri2k", 79, false);


var theClass = [student1, student2, student3, student4, student5, student6, student7];

theClass.getYoungest = function () {


    var array = this;
    var youngestStudent;
    var youngestAge = null;

    var arrLength = array.length;
    for (var i = 0; i < arrLength; i++) {

        var tempStudent = array[i];
        var tempAge = tempStudent.age;
        if (youngestAge === null)
            youngestAge = tempAge;
        if (tempAge <= youngestAge) {

            youngestStudent = i;
            youngestAge = tempAge;

        }
    }

    return this[youngestStudent];
};

var youngest = theClass.getYoungest();

console.log("The youngest = " + youngest.name + " age: " + youngest.age);


theClass.getAllFemales = function () {

    arrayAll = this;
    arrayOfFemales = [];
    var arrLength = arrayAll.length;
    for (var i = 0; i < arrLength; i++) {

        var tempStudent = arrayAll.length;
        for (var i = 0; i < arrLength; i++) {

            var tempStudent = arrAll[i];
            if (tempStudent.isFemale) {

                arrayOfFemales.push(tempStudent);
            }
        }
        return arrayOfFemales;
    }
    ;

    var arr = [];

    console.log("all females");
    theClass.getAllFemales().forEach(printName);

    function printName(name) {

        console.log(name);

    }

//Opgave 5


    function removeOne(array, studentRemoved) {
        var arrLength = array.length;


        for (var i = 0; i < arrLength; i++) {

            if (array[i].name === studentRemoved.name) {

                array.splice(i, 1);
                return array;
            }
        }

        return array;
    }


// Opgave 6


    console.log("over 30: ");
    theClass.forEach(over30);

    function over30(student) {

        if (student.age >= 30)
            console.log(student);

    }

// Opgave 7


    function max(arrWithNums) {
        var arrLength = arrWithNums.length;
        var max = null;

        for (var i = 0; i < arrLength; i++) {

            if (max === null)
                max = arrWithNums[i];
            if (arrWithNums[i] >= max)
                max = arrWithNums[i];


        }

        return max;
    }


    //Opgave 8

    function currentDay() {

        var weekDay = new Array(7);

        weekday[0] = "Sunday";
        weekday[0] = "Monday";
        weekday[0] = "Tuesday";
        weekday[0] = "Wednesday";
        weekday[0] = "Thursday";
        weekday[0] = "Friday";
        weekday[0] = "Saturday";

return weekDay[new Date().getDay()];

    }
    
    console.log("Current day: " + currentDay());



// Opgave 9


function Animal(name, isAlive, isMammal, avgAge){
    
    this.name = name;
    this.isAlive = isAlive;
    this.isMammal = isMammal;
    this.avgAge = avgAge;
}

var tiger = new Animal("Tiger", true, true, 30);
var monkey = new Animal("Monkey", true, false, 12);
var cat = new Animal("cat", true, true, 50);
var animalArray = [tiger, monkey, cat];

animalArray.forEach(function (animal) {
    
    
    var animalString = "";
    
    for (var property in animal){
        if (animal.hasOwnProperty(property)){
        animalString += animal[property] + ".";
        
        
    }
}

console.log(animalString);


});

// Opgave 10

animalArray = animalArray.filter(function (animal){
    
    if (animal.isMammal){
        
        return animal;
    }
    
});

console.log("After filtering");

animalArray.forEach(function (animal){
    
    var animalString = "";
    for(var property in animal) {
        
        if (animal.hasOwnProperty(property)) {
            animalString += animal[property] + ".";
            
        }
            
            
        }
        
        console.log(animalString);
});

// Opgave 11

animalArray.map(function (animal){
    
    console.log("Just name: "+ animal.name);
    
});

};



