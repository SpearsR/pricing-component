
function newPrice(){
    let slider = document.getElementById('price-input');
    let isDiscount = document.getElementById('checked');
    let pageviews = document.getElementById('views');
    let monthprice = document.getElementById('ppm');
    let views;
    let price;
    sliderIndex = Math.floor(slider.value/50);
    

    if(sliderIndex === 0){
        price = 8;
        views = 10;
    }
    
    else if(sliderIndex  === 1){
        price = 12;
        views = 50;
    }
    
    else if(sliderIndex === 2){
        price = 16;
        views = 100;
    }
    
    else if(sliderIndex  === 3){
        price = 24;
        views = 500;
    }
    
    else if(sliderIndex  === 4){
        price = 36;
        views = 1;       
    }

    
    if(sliderIndex === 4){
        views = `${views}M`;
    }
    
    else{
        views = `${views}K`;
    }
    
    if(isDiscount.checked){
        price = price * .75;
    }

    pageviews.innerHTML = views;
    monthprice.innerHTML = `$${price}`;
}