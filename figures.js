//Square code
function squarePerimeter(side){
    return side * 4;
}
function squareArea(side){
    return side * side;
}


//Triangle code

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
    }
function triangleArea(side1, side2, base, height){
    if(height === 0){
        const computedHeight = computeIsoscelesTriangleHeight(side1, side2, base);
        if(computedHeight === -1){
            return -1;
        }else{
            return((base * computedHeight) / 2);
        }
    }else{
        return (base * height) / 2;
    }
}

function computeIsoscelesTriangleHeight(side1, side2, side3){
    switch(true){
        case side1 === side2: return triangleHiehgtComputation(side1, side3);
        case side1 === side3: return triangleHiehgtComputation(side1, side2);
        case side2 === side3: return triangleHiehgtComputation(side2, side1);
        default: return -1;
    }
}


function triangleHiehgtComputation(a, b){
    return Math.sqrt((a*a) - (b*b/4));
}

//Circle code

function circleDiameter(radius){
    return radius * 2;
}

function circlePerimeter(radius){
    return Math.PI * circleDiameter(radius);
}
function circleArea(radius){
    return Math.PI * Math.pow(radius, 2);
}
   
//Here we handle the HTML interaction
function computeSquarePerimeter(){
   const input = document.getElementById("squareSideInput");
   const side = input.value;
   const perimeter = squarePerimeter(side);
   alert(perimeter);
}

function computeSquareArea(){
        const input = document.getElementById("squareSideInput");
        const side = input.value;
        const area = squareArea(side);
        alert(area);   
}

function computeTrianglePerimeter(){
    const input = [document.getElementById("triangleSideA"), document.getElementById("triangleSideB"),
    document.getElementById("triangleBase"), document.getElementById("triangleHeight")];
    perimeter = trianglePerimeter(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    alert(perimeter);
}




function computeTriangleArea(){
    const side1 = Number(document.getElementById("triangleSideA").value);
    const side2 = Number(document.getElementById("triangleSideB").value);
    const base = Number(document.getElementById("triangleBase").value);
    const height = Number(document.getElementById("triangleHeight").value);
    const area = triangleArea(side1, side2, base, height);
    if(area === -1){
        alert("The height couldn't be calculated since the height input wasn't provided and the triangle isn't iscocles");
    }else{
        alert(area);
    }
}

function computeCirclePerimeter(){
    const radius = document.getElementById("circleRadius").value;
    console.log(radius);
    alert(circlePerimeter(radius));

}
function computeCircleArea(){
    const radius = document.getElementById("circleRadius").value;
    alert(circleArea(radius));
}