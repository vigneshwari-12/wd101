let userForm = document.getElementById("user-form");
let userEntries=[];
const retrieveEntries = ()=>{
    let entries = localStorage.getItem('userEntries');
    if(entries){
        entries=JSON.parse(entries);
    }else{
        entries=[];
    }
    return entries;
};
const displayEntries = () => {
  let entries = retrieveEntries();
  const tableEntries = entries
    .map((input) => {
      const namedata = `<td class='border px-4 py-2'>${input.FullName}</td>`;
      const emaildata = `<td class='border px-4 py-2'>${input.email}</td>`;
      const passworddata = `<td class='border px-4 py-2'>${input.password}</td>`;
      const dobdata = `<td class='border px-4 py-2'>${input.dob}</td>`;
      const termsdata = `<td class='border px-4 py-2'>${input.terms}</td>`;
      const row = `<tr>${namedata} ${emaildata} ${passworddata} ${dobdata} ${termsdata}</tr>`;
      return row;
    })
    .join('\n');
  const tableBody = document.querySelector('#user-entries tbody');
  tableBody.innerHTML = tableEntries; // Add the table entries to the <tbody> element
};


const saveUserForm = (event)=>{
event.preventDefault();
const FullName = document.getElementById('name').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const dob = document.getElementById('dob').value
const terms = document.getElementById('acceptTerms').checked
var currentYear = new Date().getFullYear();
var birthYear = dob.split("-");
let year=birthYear[0]
var age = currentYear-year
console.log({age,currentYear,birthYear});
if(age < 18 || age > 55){
    document.getElementById('dob')
  return  alert("Age must be between 18 and 55")

}
else
{
    document.getElementById('dob')

    const input =
    {
        FullName,
        email,
        password,
        dob,
        terms
     };
     userEntries = retrieveEntries();
     userEntries.push(input);
     localStorage.setItem("userEntries",JSON.stringify(userEntries));
     displayEntries();
     userForm.reset();
}
};
userForm.addEventListener('submit',saveUserForm)
displayEntries()
