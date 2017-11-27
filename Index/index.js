var shoppingCart = [];

function displayShoppingCart() {
    var orderProductsTbl = document.getElementById('orderProductsTbl');
    while (orderProductsTbl.rows.length > 0) {
        orderProductsTbl.deleteRow(0);
    }
    //variable to hold total price of shopping cart
    var cart_total_price = 0;
    for (var product in shoppingCart) {
        //add new row
        var row = orderProductsTbl.insertRow();
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        var cellStock = row.insertCell(3);
        cellStock.align = 'right';
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cellStock.innerHTML = shoppingCart[product].Stock;
        cart_total_price + shoppingCart[product].Price;
    }
    //fill total cost of our shopping cart
    document.getElementById('cart_total').innerHTML = cart_total_price;
}

function AddtoCart(name, description, price, stock) {
    var singleProduct = {};
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    singleProduct.Stock = stock;
    shoppingCart.push(singleProduct);
    displayShoppingCart();
}

function main() {
    $('#game-over').html(
        'Game Over <i class="fa fa-gamepad" aria-hidden="true"></i>'
    );

    AddtoCart();
    displayShoppingCart();
}

$(main);
