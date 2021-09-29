it('should add a payment amount to all payments', function () {
    //what is the object in this case? 
    expect(Object.keys(allpayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('50')
    expect(allPayments['payment1'].tipAmt).toEqual('20')
    expect(allPayments['payment1'].tipPercent).toEqual('15')
})

it('should not accept a negative number', function() {
    billAmtInput.value = '';

    expect(Object.keys(allPayments).length).toEqual(0); 
})


it('should modify the append table with new values', function() {
let curPayment = createCurPayment();
allPayments['payment1'] = curPayment;

//Looking at the solution, I'm not understanding the logic behind using the table info for this piece
})

5