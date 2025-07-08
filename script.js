function handleLogin(event) {
  event.preventDefault();
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  /
  if(email === "test@example.com" && password === "0726"){
    alert("Login successful!");
  } else {
    alert("Invalid credentials. Try test@example.com / 0726");
  }
}
