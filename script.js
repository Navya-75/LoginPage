function handleLogin(event) {
  event.preventDefault();
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  // Basic frontend-only validation example
  if(email === "test@example.com" && password === "1234"){
    alert("Login successful!");
  } else {
    alert("Invalid credentials. Try test@example.com / 1234");
  }
}
