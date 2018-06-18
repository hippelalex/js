
//get array of elements

let arr = document.getElementsByClassName('block');
console.log(arr);

document.getElementById('game-container').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block'){

            event.target.innerHTML = 2;

        }

}

let datablock = document.getElementById('game-container').innerHTML;
console.log(datablock);

//Rendom function



//Move function



//Split function

//Best score function

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
