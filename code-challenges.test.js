// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// describe("gotString", () => {
//     it(" takes in a string and returns a string with a coded message ", () => {
//         const secretCodeWord1 = "Lackadaisical"
//         // Expected output: "L4ck4d41s1c4l"
//         const secretCodeWord2 = "Gobbledygook"
//         // Expected output: "G0bbl3dyg00k"
//         const secretCodeWord3 = "Eccentric"
//         // Expected output: "3cc3ntr1c"
//         expect(gotString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(gotString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(gotString(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// ReferenceError: gotString is not defined
// b) Create the function that makes the test pass.
// pseudocode - 
// output -> takes in a string
// input -> returns a string with a coded message which converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// process -
// create a function named 'gotString'
// using the .replace method we can replace the given letters/integers in the original string ->  str1.replace(regexp, str2)
// the callback function (match) => codeMap[match] is used to change each matched letter to its corresponding code from the codeMap object
// Method 1: 
// const secretCodeWord1 = "Lackadaisical"
// const secretCodeWord2 = "Gobbledygook"
// const secretCodeWord3 = "Eccentric"

// const gotString = (string) => {
//     const codeMap = {
//       a: '4',
//       e: '3',
    //   E: '3',
    //   i: '1',
    //   o: '0',
    // };
    // finished this code using gpt , I came up to the '/[aeEio]/g ' part, didn't knew what to do to actually replace for the values I wanted, It was only replacing the 'a'
    // with 4 .
//     return string.replace(/[aEeio]/g, (match) => codeMap[match])
// }
// console.log(gotString(secretCodeWord1))
// console.log(gotString(secretCodeWord2))
// console.log(gotString(secretCodeWord3))

// Method 2:
// const secretCodeWord1 = "Lackadaisical"
// const secretCodeWord2 = "Gobbledygook"
// const secretCodeWord3 = "Eccentric"
// const gotString =  (string) => {
//     let newStr = string.replace(/[aeio]/g, (match) => {
//         switch (match) {
//             case 'a':
//               return '4'
//             case 'e':
//               return '3'
//             case 'E':
//               return '3'
//             case 'i':
//               return '1'
//             case 'o':
//               return '0'
//         }
//     })
//     return newStr
// }


// ---- Rashaan refactor ----

// const obj_key = {'a': 4, 'e': 3, 'i': 1, 'o':0}

// const change_letters = (element) =>{
//     res = ''
//     element.split('').filter((value) => Object.keys(obj_key).includes(value) ? res += obj_key[value] :res += value)
// // return result 
//     return res
// }
// console.log(change_letters(secretCodeWord1));
// console.log(change_letters(secretCodeWord2));
// console.log(change_letters(secretCodeWord3));

// ---- Will refactor ----

// const codedMSG = (string) => {

    // let codeRepl = {"a": 4, "e": 3, "i": 1, "o": 0}

    // Converts 'string' to an array
    // Iterates through the array
    // return string.split("").map(value => {

        // Compares each 'value' to keys in 'codeRepl' and returns the associated value if included
        // Returns 'value' if not
        // return (Object.keys(codeRepl).includes(value.toLowerCase())) ? codeRepl[value.toLowerCase()] : value

    // Converts array back to a string 
    // }).join("")

// }

// ---- Aubrey refactor ----

// describe("codeWords", () => {
//     it("creates a function that takes a string and returns a string with a coded message", () => {
//     expect(codeWords(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(codeWords(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(codeWords(secretCodeWord3)).toEqual("3cc3ntr1c")
//  })
// })

// const secretCodeWord1 = "Lackadaisical"

// const codeWords = (string) => {
//     const newCharacters = {
//         "a": "4",
//         "e": "3",
//         "i": "1",
//         "o": "0",
//         "E": "3"
//     };
//         let newString = string;
//         for (let key in newCharacters) {
//         newString = newString.replaceAll(newCharacters[key], newCharacters[value])
//         return newString 
// }}
// console.log(codeWords(secretCodeWord1))



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// describe('filterArray', () => {
//     it("should filter the array based on the given letter", () => {
//         const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//         const filterLetterA = "a"
//         const filterLetterE = "e"
        
//         expect(filterArray(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         // Expected output: ["Mango", "Apricot", "Peach"]
        
//         expect(filterArray(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//         // Expected output: ["Cherry", "Blueberry", "Peach"]
//     })
// });

// b) Create the function that makes the test pass.
// pseudocode -
// input -> array containing strings
// output -> array containing specific letter in their strings
// process -

// create a function named 'filterArray'
// const filterArray = (arr, letter) => {
    // create a variable to store the new array with the expected letters
    // let newArray = [];
    
    // use a for loop to iterate through the array
    // for (let i=0; i < arr.length; i++){
        // locate the letter we want using .includes
        // if (arr[i].includes(letter)){
            // use .push to move the matching letters strings into a new array
//         newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// };

// ---- Rashaan refactor ---- 


// const filt_arr = (element,filter) => {
//     // iterate over parameter one and see any of the objects contain parameter two. Ideally using the filter method and includes. Note, check for casing 
//     return element.filter(value => value.toLowerCase().includes(filter))
// }
// console.log(filt_arr(fruitArray,filterLetterA));
// console.log(filt_arr(fruitArray,filterLetterE));


// ---- Cherry refactor ----
// in - an array of words and a letter
// out - array of only words from the original array which contain the input letter
// process - create a function which takes in an array and a letter, iterate through the array determining which words contain the letter, push those words into a new array, return new array. Possible tools - filter, for loop, conditionals, string method

// this function called wordsContaining letter takes in an array and a letter
// const wordsContainingLetter = (array, letter) => {
    //it filters through that array by word
    // return array.filter((word) => {
        //it accounts for casing and looks for whether the word includes the input letter
        // if (word.toLowerCase().includes(letter.toLowerCase())){
            // it returns a boolean because .filter() keeps iterations which result in true
            // return true
        // }
        // else case ensures that false cases are discarded
        // else
            // return false
    // })
// }




// ---- Kyle refactor ----

// const filterWordsByLetter = (fruitArray, filterLetter) => {
//     //initialize an empty array to input passing values
//     const filteredArray = [];
//     //iterate through the elements
//     for (let i = 0; i < fruitArray.length; i++) {
//         //Logic set the index to lowercase and determine if a specified letter is present at that index
//       if (fruitArray[i].toLowerCase().includes(filterLetter.toLowerCase())) {
//         // if true, push to the initialized array
//         filteredArray.push(fruitArray[i]);
//       }
//     }
//     return filteredArray;
// }




// ---- Tucker refactor ----

// const certainWords = (arr, str) => {
//     return arr.filter(value => value.toLowerCase().includes(str.toLowerCase()) 
//     )
// }









// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// describe ('fullHouse', () => {
//     it("determine if an array has a full house", () => {
//         const hand1 = [5, 5, 5, 3, 3]
//         // // Expected output: true
//         const hand2 = [5, 5, 3, 3, 4]
//         // // Expected output: false
//         const hand3 = [5, 5, 5, 5, 4]
//         // // Expected output: false
//         const hand4 = [7, 2, 7, 2, 7]
//         // // Expected output: true
//         expect(this(hand1).toEqual(true))
//         expect(this(hand2).toEqual(false))
//         expect(this(hand3).toEqual(false))
//         expect(this(hand4).toEqual(true))
//     })
// })

// b) Create the function that makes the test pass.
// I had connection problems this morning, my internet came back 1 min before classes, I was going to work on finishing the assessment this morning.
// pseudocode -
// input ->
// output ->
// process -


// ---- Will refactor ----

// const fullHouse = (array) => {

    // Temporary object
    // let repetitions = {}

    // Iterates through the give array
    // array.map(value => {

        // Checks to see if current value exists in 'repetitions' object
        // If yes, increment the value associated with that key
        // If no, add the current value as a key in 'repetitions' object
            // Set the key value to 1
        // repetitions[value] ? repetitions[value]++ : repetitions[value] = 1

    // })

    // Check if there are two values in 'repetitions' object that equal 3 and 2
    // return Object.values(repetitions).includes(3) && Object.values(repetitions).includes(2) ? true : false

// }


// ---- Kyle refactor ----

// const isFullHouse = (array) => {
//     // Sort the array in ascending order
//     array.sort((a, b) => a - b);
//     // Logic of a full house after the array is sorted
//     return (array[0] === array[1] && array[3] === array[4] && (array[2] === array[0] || array[2] === array[4]));
//   };


// ---- Scott refactor ----

// describe('isFullHouse', () => {
//     it('returns true if the array is a full house', () => {
//       expect(isFullHouse([5, 5, 5, 3, 3])).toBeTruthy()
//       expect(isFullHouse([7, 2, 7, 2, 7])).toBeTruthy()
//     })
//     it('returns false if the array is not a full house', () => {
//       expect(isFullHouse([5, 5, 3, 3, 4])).toBeFalsy()
//     })
//   })
//     const isFullHouse = (hand) => {
//       const counts = {};
//       for (let i = 0; i < hand.length; i++) {
//         const num = hand[i];
//         counts[num] = (counts[num] || 0) + 1
//       }
//       const values = Object.values(counts);
//       return values.includes(2) && values.includes(3)
//     }