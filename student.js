
var Name = document.getElementById("Name")
var Age = document.getElementById("Age")
var Gender = document.getElementById("Gender")
var Course = document.getElementById("Course")
var EmailId = document.getElementById("Email ID")
var table = document.getElementById("table")
function Save(){
var tr =document.createElement("tr")
var tdname =document.createElement("td")
var tdage =document.createElement("td")
var tdgender =document.createElement("td")
var tdcourse =document.createElement("td")
var tdemailid =document.createElement("td")

tdname.textContent=Name.value
tdage.textContent=Age.value
tdgender.textContent=Gender.value
tdcourse.textContent=Course.value
tdemailid.textContent=EmailId.value
tr.appendChild(tdname)
tr.appendChild(tdage)
tr.appendChild(tdgender)
tr.appendChild(tdcourse)
tr.appendChild(tdemailid)
table.append(tr)
}
