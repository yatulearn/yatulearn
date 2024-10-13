
let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      console.error("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }
  
    const sanitizedFullName = fullName.trim();
    const sanitizedEmail = email.trim();
    const sanitizedPassword = hashPassword(password); 
  
    const existingUser = users.find(user => user.email === sanitizedEmail);
    if (existingUser) {
      console.error("Email already exists.");
      return;
    }

    users.push({ fullName: sanitizedFullName, email: sanitizedEmail, password: sanitizedPassword });

 
    localStorage.setItem('users', JSON.stringify(users));

    console.log('User added:', { fullName: sanitizedFullName, email: sanitizedEmail });
    console.log("Signup successful!");
  
    document.getElementById('signupForm').reset();
  
  });


  function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; 
    }
    return `hashed_${hash}`;
  }