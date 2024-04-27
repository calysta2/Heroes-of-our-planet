    var modal = document.querySelector('.modal-container');
    var button = document.querySelector('button');
    var btnClose = document.querySelector('span');

    function goToBuy(){
        window.location.assign('order.html')
    }

    function payment(){
        var products=document.getElementById('products').value;
        var numpro=document.getElementById('numpro').value;
        var totalPayment=products*numpro;
         document.getElementById('total').innerHTML=totalPayment;
        setTimeout(() => {
            alert('THANK YOU FOR BUYING OUR PRODUCT!')
            window.location.assign('detail.html')    
        }, 3000)
    }