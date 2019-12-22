var students = {};
var index = 0;

function addStudent() {
    var str1 = document.getElementById("firstname").value;
    var str2 = document.getElementById("lastname").value;
    var str3 = document.getElementById("address").value;
    var str4 = document.getElementById("city").value;
    var str5 = document.getElementById("state").value;
    var str6 = document.getElementById("zip").value;
    var str7 = document.getElementById("email").value;
    var str8 = document.getElementById("phone").value;
    if(str1 != "" && str2 !="" && str3 !="" && str4 !="" && str5 !="" &&
    str6 !="" && str7 !=""){
        var student = str1 + " " + str2 + " " + str3 + " " + str4 + " " + str5 + " "
        + str6 + " " + str7 + " " + str8;
        alert(student);
        students[index] = student;
        index++;
    } else {
        alert("Enter values for all the fields please")
    }
}

window.localStorage.setItem("studentsList", JSON.stringify(students));

//  document.write("<tr>");
//  document.write("<td colspan='2'>");
//  document.write("<div class='retcangle'>");
//  document.write("<button onclick='addStudent()' id='btn1'>");
//  document.write("Add");
//  document.write("</button>");
//  document.write("<input type = 'reset' value='clear' class ='rounded'>");
// document.write("</div>");
//  document.write("</td>");
//  document.write("</tr>");



// <tr>
//   <td colspan="2">
//     <div class="rectangle">
//     <button type="button" class="btn btn-default" onclick="addStudent()">Add</button>
//     <input type="reset" value="Clear " class="rounded">
//     </div>
//   </td>
// </tr>
