  // Import Firebase modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

  import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyAislt1-eq2SDu1HH3wpSYoZRae2oTvjD4",
      authDomain: "yatu-learn.firebaseapp.com",
      projectId: "yatu-learn",
      storageBucket: "yatu-learn.appspot.com",
      messagingSenderId: "252805010346",
      appId: "1:252805010346:web:bfbc943ee9248609d611d3",
      measurementId: "G-7N2BPPBNHB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Email/Password Signup
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            window.location.href = 'index.html'; // Redirect after successful signup
        })
        .catch((error) => {
            alert('Error during sign up: ' + error.message);
        });
});

  // Google Sign-In
  const googleProvider = new GoogleAuthProvider();
  document.querySelector('.google-btn').addEventListener('click', () => {
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              console.log('Google sign-in successful:', result.user);
              window.location.href = 'index.html';
          })
          .catch((error) => {
             alert('Error during Google sign-in:'+ error.message);
          });
  });

  // GitHub Sign-In
  const githubProvider = new GithubAuthProvider();
  document.querySelector('.github-btn').addEventListener('click', () => {
      signInWithPopup(auth, githubProvider)
          .then((result) => {
              console.log('GitHub sign-in successful:', result.user);
              window.location.href = 'index.html';
          })
          .catch((error) => {
              alert('Error during GitHub sign-in:'+ error.message);
          });
  });


  
  // Login User Function
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Logged in: " + user.email);
            // Redirect to a dashboard or perform another action
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Login Error: " + errorCode + " " + errorMessage);
        });
  };

