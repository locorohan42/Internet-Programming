var ssList = JSON.parse(window.localStorage.getItem("studentsList"))
function searchStudent(){
    var searchName = document.getElementById("lastname").value;
    for (var i in ssList){
        if ssList.includes(searchName){
            alert(searchName + " is in the system.")
        } else {
            alert(searchName + " is not in the system.")
        }

    }
}
