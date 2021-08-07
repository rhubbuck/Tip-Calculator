document.getElementById('calculator').onchange = ()=> {
    const results = document.getElementById('results');
    let totalBill = Number(document.getElementById('total').value);
    let tipPercent = document.getElementById('range').value;
    const totalWithTip = document.getElementById('total-with-tip');
    const tipAmount = document.getElementById('tip-amount');
    const tipOutput = document.getElementById('tip-output');

    let tipTotal = totalBill * (tipPercent / 100);
    
    if (tipTotal !== 0) 
        {tipAmount.innerHTML = `$${tipTotal.toFixed(2)}`;
         results.style.display = 'block';
        tipOutput.innerHTML = `${tipPercent}%`;}

    let billTotal = totalBill + tipTotal;
    
    if (tipTotal !== 0) 
        {totalWithTip.innerHTML = `$${billTotal.toFixed(2)}`;}
};