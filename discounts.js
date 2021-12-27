
var discounts = [];
var finalPrice;
var discount = 0;
var price;
var discountCoupon = 0;

for(var i = 0; i < 100 ; i++){
    var discountName = "discount" + i;
    var discountPercentage = i % 85;
    discounts.push(new Coupons(discountName, discountPercentage));
}

function computePriceWithDiscount(){
    const decimalPercentageOfPriceWithDiscount = (100 - (discount + discountCoupon))/100;
    finalPrice = decimalPercentageOfPriceWithDiscount * price;
    return finalPrice;
}

function getDiscount(){
    const priceInput = document.getElementById("price");
    price = Number(priceInput.value);
    const discountInput = document.getElementById("discount");
    discount = Number(discountInput.value);
    finalPrice = computePriceWithDiscount();
    setFinalPrice();
}

function onClickAddCoupon(){
    const couponCode = document.getElementById("coupon");
    const couponIdenx = discounts.findIndex(function(elem){
        return elem.discountName === couponCode.value
    });
    //findIndex(function(element) { /* ... */ })
    if(couponIdenx != -1){
        const couponPercentage = discounts[couponIdenx].discountPercentage;
        discountCoupon = couponPercentage;
    }

}

function setFinalPrice(){
    document.getElementById("finalPriceResult").innerText = "The final price is: " + finalPrice;
}

function Coupons(discountName, discountPercentage){
    this.discountName = discountName;
    this.discountPercentage = discountPercentage;
}




