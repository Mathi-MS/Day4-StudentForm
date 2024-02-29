var namee = document.getElementById("namee")
var age = document.getElementById("age")
var select = document.getElementById("select")
var email = document.getElementById("email")
var male = document.getElementById("male")
var female = document.getElementById("female")

// console.log(namee.value);
// console.log(age.value);
// console.log(select.value);
// console.log(email.value);

var tabletwo = document.getElementById("table-two")

function change() {
    var tr = document.createElement("tr")
    var tdone = document.createElement("td")
    var tdtwo = document.createElement("td")
    var tdthree = document.createElement("td")
    var tdfour = document.createElement("td")
    var tdfive = document.createElement("td")
    var tdsix = document.createElement("td")
    tr.appendChild(tdone)
    tr.appendChild(tdtwo)
    tr.appendChild(tdthree)
    tr.appendChild(tdfour)
    tr.appendChild(tdfive)
    tr.appendChild(tdsix)
    // ----- 
    // ---- 
    tdone.innerHTML=namee.value
    tdtwo.innerHTML=age.value
    tdthree.innerHTML=select.value
    
    var gender = document.getElementsByName("gender")
    for(i=0 ; i<gender.length;i++){
        if (gender[i].checked)
        var one =  gender[i].value
    }

    tdfour.innerHTML= one
    tdfive.innerHTML=email.value
    tdsix.innerHTML=`<button onclick=del(event)>delete<button>`
    tabletwo.append(tr)

    console.log(gender.value);
}
function del(event) {
    event.target.parentElement.parentElement.remove()
}