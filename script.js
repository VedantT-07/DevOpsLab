function addStudent() {

    document.getElementById("count").innerText = document.getElementById("studentList").children.length;

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}