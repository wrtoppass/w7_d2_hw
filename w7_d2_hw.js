// Question 1

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

const shopping = (list) => {
    for (i=0; i < list.length; i++) {
        delete list[i].id
        console.table(list[i])
    }
}

console.log(shopping(shopItems))





//Question 2

function analyzeFood(food) {
  for (let key in food) {
    console.log(`${key} contains:`)
    const value = food[key]
    if (Array.isArray(value)) {
      value.forEach((element) => {
        if (typeof element === 'object') {
          analyzeFood(element)
        } else {
          console.log(element)
        }
      });
    } else if (typeof value === 'object') {
      analyzeFood(value)
    } else {
      console.log(value)
    }
  }
}
analyzeFood(hwPerson)


const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell", //same
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(hwPerson.shakes instanceof Array)



// Question 3
//Create a Promised based function that will check a string to determine if it's length is greater than 10.
//If the length is greater than 10 then resolve it and console log "Big word". 
//If the length of the string is less than 10 then reject it and  console log "Small String" 

const biggerThanTen = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve('Big word')
        } else {
            reject('Small String')
        }
    })
}

console.log(biggerThanTen('Flabbergasted'))


//Question 4:
//Create a base class of GameMember and 2 children classes of Dealer, Player
//both dealer and player have:
//hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
//hit() : ability to add  a random number [1-13] to their hand
//When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
//When a Player hits they can hit as long as their total is under 21
//Use the randomNumber function provided below to gernerate a random number 1-12

class GameMember{
    constructor(name, age){
        this.name = name
        this.age = age
        this.hand = []
    }

    hit() {
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 17) {
            this.hand.push(Math.random(13))
           }
        }
    }
}

class Dealer extends GameMember {
    constructor(name, age) {
        super(name, age, this.hand)
    }
    play() {
        this.hand.push(Math.random(13))
        this.hand.push(Math.random(13))

    }

    hit() {
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 17) {
            this.hand.push(Math.random(13))
           }
        }
    }
}
    
class Player extends GameMember {
    constructor(name, age) {
        super(name, age, this.hand)
    }

    play() {
        this.hand.push(Math.random(13))
        this.hand.push(Math.random(13))

    }

    hit() {
        
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 21) {
            this.hand.push(Math.random(13))
           }
        }
    }
}





//Question 5: 3 codewars in JS

// P to JS 1. https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python
function removeFirstAndLastCharacters(str) {
    return str.slice(1, -1);
  }
const originalString = "William Toppass"
const modifiedString = removeFirstAndLastCharacters(originalString)
console.log(modifiedString) 
// illiam Toppas

// P to JS 2. https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
function highAndLow(numbers) {
    const numberArray = numbers.split(' ').map(Number)
    const highest = Math.max(...numberArray)
    const lowest = Math.min(...numberArray)
    return highest + ' ' + lowest
  }
  console.log(highAndLow("1 2 3 4 5"))    
  console.log(highAndLow("1 2 -3 4 5"))    
  console.log(highAndLow("1 9 3 4 -5"))    
  // 5 1
  // 5 -3
  // 9 -5

  // P to JS 3. https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++
      }
    }
  
    return count
  }
  console.log(countVowels("william"))
  console.log(countVowels("matrix"))
  console.log(countVowels("javascript")) 
  // 3
  // 2
  // 3