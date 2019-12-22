/* define functions here */
function calculateTotal(quantity, price){
    return quantity * price;
}
//Doesnt' worrrksdkfsadf sadkjflaskdjf;lkasdj

function outputCartRow(file, title, quantity, price, total){
    document.write("<td>");
    document.write("<img src='" + file + "'/>");
    document.write("</td>");

    document.write("<td>");
    document.write(title);
    document.write("</td>");

    document.write("<td class='center'>");
    document.write(quantity);
    document.write("</td>");

    document.write("<td class='right'>");
    document.write("$"+price.toFixed(2));
    document.write("</td>");

    total = calculateTotal(price, quantity)
    document.write("<td class='right'>");
    document.write("$"+total.toFixed(2));
    document.write("</td>");
    document.write("</tr>");
}

//Function calls calculate total for each row adding everything up
function calculateSubTotal(){
    return calculateTotal(prices[0], quantities[0])
    + calculateTotal(prices[1], quantities[1]) + calculateTotal(prices[2], quantities[2])
}

//Function simply  returns 10% of the subtotal
function calculateTax(subtotal){
    return subtotal * .1;
}

//Free shipping for over $1000 otherwise $40
function calculateShipping(subtotal){
    if (subtotal > 1000) {
        return 0;
    } else {
        return 40;
    }
}

//Adds all costs up
function calculateGrandTotal(subtotal, tax, shipping){
    return subtotal + tax + shipping;
}
//Stores method calls in global variables
var Subtotal = calculateSubTotal()

var Tax = calculateTax(Subtotal)

var Shipping = calculateShipping(Subtotal)

var GrandTotal = calculateGrandTotal(Subtotal, Tax, Shipping)
 
