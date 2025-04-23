function updateTrendIndicator(initialPrice, prediksi) {
    console.log("updateTrendIndicator called with interval:", initialPrice, prediksi);
    const trendIndicator = document.getElementById('trendIndicator');
    if (parseFloat(initialPrice) > parseFloat(prediksi)) {
        trendIndicator.textContent = 'Bearish';
        trendIndicator.style.color = '#ff5c5c';
    } else if (parseFloat(initialPrice) < parseFloat(prediksi)) {
        trendIndicator.textContent = 'Bullish';
        trendIndicator.style.color = '#9dd99d';
    } else {
        trendIndicator.textContent = 'Neutral';
        trendIndicator.style.color = 'white';
    }
}
function perubahanHarga(initialPrice, updatedPrice){
    const priceChange = updatedPrice - initialPrice;
    const presentage = (priceChange/initialPrice)*100;
    const change = document.getElementById('perubahan');
    console.log("perubahan harga : ", priceChange);
    console.log("perubahan presentase : ", presentage)
    if(parseFloat(priceChange)<0){
        change.textContent = "USD " + priceChange.toFixed(2) + " (" + presentage.toFixed(2) + "%)";
        change.style.color = '#ff5c5c';
        console.log("sukses");
    }else if(parseFloat(priceChange)>0){
        change.textContent = "USD +" + priceChange.toFixed(2)+ " (+" + presentage.toFixed(2) + "%)";
        change.style.color = '#9dd99d';
        console.log("sukses"); 
    }else{
        change.textContent = priceChange + " (" + presentage + "%)";
        //change.style.color = 'white';
        console.log("sukses");
    }
}

const currentHarga = initialPriceFromTemplate;
const predictedHarga = predictedPriceFromTemplate;
const updatedHarga = updatedPriceFromTemplate;

updateTrendIndicator(updatedHarga, predictedHarga);
perubahanHarga(currentHarga, updatedHarga);

/*
setInterval( () => {
    location.reload()
}, 2000)

*/
