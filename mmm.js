/*
let myElm = document.createElement("input");	// Create a new element
myElm.innerText = 'test';		// Change the text of the element
myElm.style.color = 'red';		// Change the text color of the element
document.body.appendChild(myElm);	// Add the object to the DOM
*/

let insertedElems = [];
let arr = [];

function insertElements(){
    let number = document.getElementById("numbers");
    number = Number(number.value);
    for(let i = 0; i < number; i++){
        let x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("placeholder", "number");
        insertedElems.push(x);
        document.getElementsByClassName("form-elem")[0].appendChild(x);
    }  
}

function getValues(){
    insertedElems.forEach(element => {
        arr.push(Number(element.value)); 
    });
    sortArray();
    const mean = getMean();
    const median = getMedian();
    const mode = getMode();
    let values = {
        The_mean: mean,
        The_median: median,
        The_mode: mode
    };
    insertValues(values);
}

function insertValues(values){
   const mean = document.getElementById("mean");
   const median = document.getElementById("median");
   const mode = document.getElementById("mode");
   mean.innerText = String(values.The_mean);
   median.innerText = String(values.The_median);
   let modeText = '';
   values.The_mode.forEach(element => {
    modeText = modeText + element[0] + ", ";
   });
   modeText = modeText.slice(0, modeText.length-2);
   mode.innerText = modeText;

   


}

function sortArray(){
    arr.sort(
        function(a, b){
            return a - b;
        }
    );
}

const sumArrElems = function(a, b){
    return a + b;
}

function getMean(){
    const totalSum = arr.reduce(sumArrElems);
    const mean = totalSum/arr.length;
    return mean
}

function getMedian(){
    let median;
    const half = arr.length/2;
    if(arr.length % 2 != 0){
        median = arr[half - 0.5];
    }else{
        median = (arr[half - 1] + arr[half]) / 2;
    }
    return median;
}

function getMode(){
    let repets = {};

    /* I fill the object repets */
    arr.map(
        function(elem){
            if(repets[elem]){
                repets[elem] += 1;
            }else{
                repets[elem] = 1;
            }
        }
    )
    const repetsSorted = Object.entries(repets).sort(
        function(a, b){
            return a[1] - b[1];
        }
    )
    const times = repetsSorted[repetsSorted.length-1][1]; 
    let modes = [repetsSorted[repetsSorted.length-1]];
    repetsSorted.pop();
    while( (repetsSorted.length > 0) &&  ( times === (repetsSorted[repetsSorted.length-1])[1] ) ){
        modes.unshift(repetsSorted[repetsSorted.length-1]);
        repetsSorted.pop();
    }
    return modes;
}

