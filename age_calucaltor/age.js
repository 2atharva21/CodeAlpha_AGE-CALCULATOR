document.getElementById('calculateBtn').addEventListener('click', function() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var month = today.getMonth() - dobDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your age is ' + age + ' years.';
    resultElement.classList.add('show'); // Add class to show result with animation
  });
  