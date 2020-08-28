// check if the browser supports localStorage

if (typeof Storage !== "undefined") {


  // There are two storages, localStorage and sessionStorage
  // The does not expire but the latter does

  // setItem create a name/value pair as in
  localStorage.setItem('firstName', 'Michael')

  // getItem stored with the item name
  document.getElementById('firstname')
    .innerHTML = localStorage.getItem("firstName")

  // setItem and getItem can be all done this as follows
  localStorage.lastName = "Samituga"

  let fullName = localStorage
    .getItem("firstName") + " " + localStorage.lastName
  document.getElementById('fullname').innerHTML = fullName

  // removeItem removes item value by name
  localStorage.removeItem('firstName')

  fullName = localStorage
    .getItem("firstName") + " " + localStorage.lastName
  document.getElementById('removefirstname').innerHTML = fullName

  // All that has been doen for the localStorage can be done for the sessionStorage
  // Just that the sessionStorage, the stored data is removed after the session is 
  // destroyed - there is only one session
  // You cast the value to the type needed if necessary

  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')

  fullName = localStorage
    .getItem("firstName") + " " + localStorage.lastName
  document.getElementById('removefirstnameandlastname')
    .innerHTML = fullName


} else {
  alert("Your browser does not supports localStorage")
}
