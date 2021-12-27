let colSalaries = colombia.map(
    function(person){
        return person.salary;
    }
);

colSalaries = colSalaries.sort(
    function(a, b){
        return (a - b);
    }
);

//Top 10% mean

function get10data(arr){
    const amount = arr.length;
    const startingPoint = Math.floor(amount * 0.9);
    let pplTop10 = [];
    
    pplTop10 = arr.slice(startingPoint, arr.length);
    return pplTop10;
}


function getMedian(arr){
    const length = arr.length;
    const middlePoint = arr.length/2;
    let media;

    if(length % 2 === 0){ //its even
        middle1 = arr[middlePoint - 1];
        middle2 = arr[middlePoint]
        media = getMean([middle1, middle2]);
    }else{ //It's odd
        const index = Math.floor(middlePoint);
        media = arr(index);
    }
    return media;
}

function getMean(arr){
    const total = arr.reduce(
        function(previous, current){
            return previous + current;
        }
    );
    mean = total/arr.length;
    return mean;
}

const ColombiaSalaryMean = getMean(colSalaries);
const ColombiaSalaryMedian = getMedian(colSalaries);
const top10SalariesArr = get10data(colSalaries);
const ColombiaTop10SalaryMean = getMean(top10SalariesArr);
const ColombiaTop10SalaryMedian = getMedian(top10SalariesArr);

console.log(
    {
        ColombiaSalaryMean: ColombiaSalaryMean,
        ColombiaSalaryMedian: ColombiaSalaryMedian,
        ColombiaTop10SalaryMean: ColombiaTop10SalaryMean,
        ColombiaTop10SalaryMedian: ColombiaTop10SalaryMedian
    }
);