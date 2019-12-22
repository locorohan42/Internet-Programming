var sList = JSON.parse(window.localStorage.getItem("studentsList"))
document.write("<table>")
document.write("<tr>")
for (var i in sList){
    document.write("<td>")
    document.write(sList[i]);
    document.write("</td>")
}
document.write("</tr>")
document.write("</table>")
