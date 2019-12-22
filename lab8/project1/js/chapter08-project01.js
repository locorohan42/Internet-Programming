/* add loop and other code here */
 for (var i = 0; i <3; i++) {
     outputCartRow(filenames[i], titles[i], quantities[i], prices[i]);
     //What to put for total??
 }

 document.write("<tr class='totals'>");
 document.write("<td colspan='4'>");
 document.write("Subtotal");
 document.write("</td>");
 document.write("<td>");
 document.write("$"+Subtotal.toFixed(2))
 document.write("</td>");
 document.write("</tr>");

 document.write("<tr class='totals'>");
 document.write("<td colspan='4'>");
 document.write("Tax");
 document.write("</td>");
 document.write("<td>");
 document.write("$"+Tax.toFixed(2))
 document.write("</td>");
 document.write("</tr>");

 document.write("<tr class='totals'>");
 document.write("<td colspan='4'>");
 document.write("Shipping");
 document.write("</td>");
 document.write("<td>");
 document.write("$"+Shipping.toFixed(2))
 document.write("</td>");
 document.write("</tr>");

 document.write("<tr class='totals focus'>");
 document.write("<td colspan='4'>");
 document.write("Grand Total");
 document.write("</td>");
 document.write("<td>");
 document.write("$"+GrandTotal.toFixed(2))
 document.write("</td>");
 document.write("</tr>");
