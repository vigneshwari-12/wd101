document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const dataTable = document.getElementById('data-table').querySelector('tbody');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const acceptTerms = document.getElementById('accept-terms').checked;
  
      const age = calculateAge(dob);
      if (age >= 18 && age <= 55 && acceptTerms) {
        const newRow = dataTable.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptTerms ? 'Yes' : 'No'}</td>`;
      } else {
        alert('Please make sure your age is between 18 and 55 and you have accepted the terms.');
      }
    });
  
    function calculateAge(dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
      }
      return age;
    }
  });
  
