document.getElementById('calculator').onchange = ()=> {
    let totalBill = Number(document.getElementById('total').value);
    let tipPercent = document.getElementById('tip-percent').value;
    let tipTotal = totalBill * (tipPercent / 100);
    const tipAmount = document.getElementById('tip-amount');
    if (tipTotal !== 0) 
        {tipAmount.innerHTML = tipTotal.toFixed(2)};
    let billTotal = totalBill + tipTotal;
    const totalWithTip = document.getElementById('total-with-tip');
    if (tipTotal !== 0) 
        {totalWithTip.innerHTML = billTotal.toFixed(2);}

};