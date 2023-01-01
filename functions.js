// what It means to Be function in java script
// this means that you can!

// 1 - you can represent in the appliction in wihe var, let, or const


var log = function(message){
    console.log(message)
}

// we can write the function used the arrow function


const log_massge = message => {
    console.log(message)
}

// 2 - you can varible , we can add them to the objects:

const obj = {
    message: "the function in javascript can be add to the objects",
    new_log(message){
        console.log(message)
    }
}
// print the massage in the terminal
// obj.new_log(obj.message)

// 3 - as you is function you  and  add to any array

const messages = [
    'they will add function to my aitem',
    message => console.log(message)
]

// we can access any aitem in the array used the index 
// will add the function in the index 1 and will be ablily to pass the arrgument to the function used ()


// messages[1](messages[0])


//================

// 3 - and the end as you function in javascript you can be pass to the function ass argument

const inside_function = logger => {
    logger("the message the will be print")
}

// when we call the function we will pass the function that we wint to be send

// inside_function(message => console.log(message))

// 4 - then the last the can be returned from other function 

const creatScream = function(logger){
    return function(message){
        logger(message.toUpperCase() + '!!!!!!!!')
    }
}

const screm = creatScream(messag => console.log(messag))

// screm("sajid main app for javascropt")

// we can used the same example in the next 

const new_example = logger => message => {
    logger(message.toUpperCase())
}

// the imperative approach in javascript

// replaset the item in javascript withe and item





const string = "Restauranst in human"
var url_frinde = ''

for (var i = 0; i < string.length; i++){
    if (string[i] === " "){
        url_frinde += '-'
    }else{
        url_frinde += string[i]
    }
}


const reuslet = string.replace(/ /g, "-")

// console.log(reuslet)



// the function Concepts

// immutability

// the represents the colores

let color_lawn = {
    title : "lawn",
    color : "#00f",
    rating : 0
}

// creat the function the get the object and would rate color 

function reteColor(color, rating){
    color.rating = rating
    return color // this function will return new object the have new value
}

// print the new color in the trimel used new value

// console.log(reteColor(color_lawn, 34).rating)

// samy function 

const reat_color = function(color, rating){
    return Object.assign({}, color, {rating : rating})
}


// the same function used the arrow function

const reatColorTow = (color, rating) => ({
    ...color,
    rating
})

// console.log(reatColorTow(color_lawn, 23)) // to print the value of the object color to the new rating


// used the array of the value

let list = [{title : 'read'}, {title : 'Lawn'}, {title : "party pink"}]


// creat the function that can push to the array

const addColor = function(title, colores){
    colores.push({title : title})
    return colores
}

// console.log(addColor("read firs", list).length)

// this method will add the new item to the list 


// used the same exmple in 

const add_color = (title, array) => array.concat({title})

// what is concat do in javascript


// console.log(add_color("new_color", list).length)


/// ================================================================


// Pure function in javascript

const frederick = {
    name : "frederick",
    canRead : false,
    canWrite : false
}


function selfEduate(){
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick
}

selfEduate()

// console.log(frederick)

const self_educate = person => ({
    ...person,
    canRead: true,
    canWrite : true
})

self_educate()

// console.log(frederick)

// =====================

// Data Transformation

const school = ['Yourtown', 'washington', 'wakefield']

// you can join the item for the array used 'join'

// console.log(school.join(","))

//  how to used the filter methode in java script

const w3school = school.filter(school => school[0] === "w")

// console.log(w3school)

const cutSchool = (cut, list) => list.filter(school => school !== cut)

// console.log(cutSchool("washington", school).join(', '))

// used the map function in javascript

const highschool = school.map(school => '${school} high school')


// console.log(highschool.join(" >"))



// you can used to map to new array of item

const highSchooles = school.map(school => ({name : school}))


// console.log(highSchooles)

// you can used to add new name to this list



const editName = (oldName, name, array) => 
array.map(item => {
    if (item.name === oldName){
        return {
            ...item,
            name
        }

    }else{
        return item;
    }
})


const new_edit_name = (oldName, name, arr) => 
arr.map(item => (item.name === oldName ? {...item, name} : item))

// used the map with key value from the object




const scho = {
    youktown : 10,
    "Washingthon" : 2,
    wakefield : 5
}

const schoolArray = Object.keys(scho).map(key => ({
    name : key,
    wins : school[key]
}))





















