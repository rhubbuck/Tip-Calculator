document.getElementById('calculator').onchange = ()=> {
    const results = document.getElementById('results');
    let totalBill = Number(document.getElementById('total').value);
    let tipPercent = document.getElementById('tip-percent').value;
    const totalWithTip = document.getElementById('total-with-tip');
    const tipAmount = document.getElementById('tip-amount');

    let tipTotal = totalBill * (tipPercent / 100);
    
    if (tipTotal !== 0) 
        {tipAmount.innerHTML = `$${tipTotal.toFixed(2)}`;
         results.style.display = 'block';}

    let billTotal = totalBill + tipTotal;
    
    if (tipTotal !== 0) 
        {totalWithTip.innerHTML = `$${billTotal.toFixed(2)}`;}
};