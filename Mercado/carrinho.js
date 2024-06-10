function clearCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    updateTotalAmount();
}

function checkout() {
    alert('Compra finalizada! Total: R$ ' + document.getElementById('totalAmount').innerText);
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    updateTotalAmount();
}

function compra(){
    alert("Compra finalizada!")
}
document.getElementById
function clearProduct1() {
    document.getElementById('product-qtde-input-1').parentElement.parentElement.remove();
    updateTotalAmount();
}

function clearProduct2() {
    document.getElementById('product-qtde-input-2').parentElement.parentElement.remove();
    updateTotalAmount();
}

function clearProduct3() {
    document.getElementById('product-qtde-input-3').parentElement.parentElement.remove();
    updateTotalAmount();
}

function clearProduct4() {
    document.getElementById('product-qtde-input-4').parentElement.parentElement.remove();
    updateTotalAmount();
}

function clearProduct5() {
    document.getElementById('product-qtde-input-5').parentElement.parentElement.remove();
    updateTotalAmount();
}

function clearProduct6() {
    document.getElementById('product-qtde-input-6').parentElement.parentElement.remove();
    updateTotalAmount();
}

function updateTotalAmount() {
    const cartItems = document.querySelectorAll('.grid-container > div');
    let total = 0;

    cartItems.forEach(item => {
        if (item.style.visibility === 'visible') {
            const priceElement = item.querySelector('.productPrice');
            const quantityElement = item.querySelector('.product-qtde-input');

            if (priceElement && quantityElement) {
                const price = parseFloat(priceElement.textContent.replace('R$', '').replace('.', '').replace(',', '.'));
                const quantity = parseInt(quantityElement.value);
                total += price * quantity;
            }
        }
    });

    document.getElementById('totalAmount').innerText = total.toFixed(2).replace('.', ',');
}


document.querySelectorAll('.product-qtde-input').forEach(input => {
    input.addEventListener('change', updateTotalAmount);
});

function showElement1() {
    var element1 = document.getElementById('div-product1');
    element1.style.visibility = 'visible';
    element1.style.position = 'relative';
    localStorage.removeItem('showElement1'); 
    updateTotalAmount();
}
if (localStorage.getItem('showElement1') === 'true1') {
    showElement1();
}

function showElement2() {
    var element2 = document.getElementById('div-product2');
    element2.style.visibility = 'visible';
    element2.style.position = 'relative';

    localStorage.removeItem('showElement2'); // Limpa o estado após a mudança
    updateTotalAmount();
}
if (localStorage.getItem('showElement2') === 'true2') {
    showElement2();
}

function showElement3() {
    var element3 = document.getElementById('div-product3');
    element3.style.visibility = 'visible';
    element3.style.position = 'relative';
    localStorage.removeItem('showElement3'); // Limpa o estado após a mudança
    updateTotalAmount();
}
if (localStorage.getItem('showElement3') === 'true3') {
    showElement3();
}

function showElement4() {
    var element4 = document.getElementById('div-product4');
    element4.style.visibility = 'visible';
    element4.style.position = 'relative';
    localStorage.removeItem('showElement4'); // Limpa o estado após a mudança
    updateTotalAmount();
}
if (localStorage.getItem('showElement4') === 'true4') {
    showElement4();
}

function showElement5() {
    var element5 = document.getElementById('div-product5');
    element5.style.visibility = 'visible';
    element5.style.position = 'relative';
    localStorage.removeItem('showElement5'); // Limpa o estado após a mudança
    updateTotalAmount();
}
if (localStorage.getItem('showElement5') === 'true5') {
    showElement5();
}

function showElement6() {
    var element6 = document.getElementById('div-product6');
    element6.style.visibility = 'visible';
    element6.style.position = 'relative';
    localStorage.removeItem('showElement6'); // Limpa o estado após a mudança
    updateTotalAmount();
}
if (localStorage.getItem('showElement6') === 'true6') {
    showElement6();
}
