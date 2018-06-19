
//get array of elements

let blocks = document.getElementsByClassName('block');
// console.log(arr);
blocks = Array.prototype.slice.call(blocks);
console.log(blocks);
blocks.forEach(function(block) {
    console.log(block.innerHTML);
});

let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(blocks.reduce(reducer));

console.log(blocks.reduce(reducer, 15));

//Rendom function
// document.getElementById('btn-restart').onclick = function(rendom) {

//}


document.getElementById('game-container').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block'){

        event.target.innerHTML = 2;

    }

}


//Move function




//Split function

//Best score function

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
