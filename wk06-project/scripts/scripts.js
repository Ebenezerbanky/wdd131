// DOM Manipulation and Event Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate form
    if (name && email && message) {
      // Save to localStorage
      const formData = { name, email, message };
      localStorage.setItem('formData', JSON.stringify(formData));
  
      // Display success message
      document.getElementById('formMessage').textContent = 'Thank you for your message!';
      document.getElementById('formMessage').style.color = 'green';
  
      // Clear form
      document.getElementById('contactForm').reset();
    } else {
      // Display error message
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
      document.getElementById('formMessage').style.color = 'red';
    }
  });
  
  // Load saved data from localStorage
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    console.log('Saved Form Data:', JSON.parse(savedData));
  }
  
  // Example of using template literals
  const user = { name: 'John Doe', age: 30 };
  const userInfo = User: ${user.name}, Age: ${user.age};
  console.log(userInfo);
  
  // Example of using arrays and array methods
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
  console.log('Doubled Numbers:', doubled);
