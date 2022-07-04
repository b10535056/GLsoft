const submitbtn = document.getElementById("submitbtn");
const zhname = document.getElementById("Zh_name");
const enname = document.getElementById("En_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkpassword = document.getElementById("checkpassword");
const identification = document.getElementById("identification");
const date = document.getElementById("date");
const area = document.getElementById("area");
const street = document.getElementById("street");
const phonenumber = document.getElementById("phonenumber");
const input = document.getElementsByTagName("input");

console.log(area.value);

submitbtn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(submitbtn);
  checkInputs();
});

function checkInputs() {
  const zhnamevalue = zhname.value.trim();
  const ennamevalue = enname.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const checkpasswordvalue = checkpassword.value.trim();
  const identificationvalue = identification.value.trim();
  const phonenumbervalue = phonenumber.value.trim();
  const streetvalue = street.value.trim();

  if (zhnamevalue === "") {
    setError(zhname);
    zhname.parentElement.children[3].innerHTML = "Could not be blank !!!";
  } else {
    setSuccess(zhname);
    zhname.parentElement.children[3].innerHTML = "";
  }

  if (ennamevalue === "") {
    setError(enname);
    enname.parentElement.children[3].innerHTML = "Could not be blank !!!";
  } else {
    setSuccess(enname);
    enname.parentElement.children[3].innerHTML = "";
  }

  if (emailvalue === "") {
    setError(email);
    email.parentElement.children[3].innerHTML = "Could not be blank !!!";
  } else {
    setSuccess(email);
    email.parentElement.children[3].innerHTML = "";
  }

  //   if (passwordvalue === "") {
  //     setError(password);
  //     password.parentNode.children[1].style.display = "block";
  //     password.parentNode.children[1].innerHTML = "";
  //     password.parentNode.children[4].innerHTML = "Could not be blank !!!";
  //   } else if (passwordvalue.length < 6 || passwordvalue.length > 20) {
  //     setError(password);
  //     password.parentNode.children[1].innerHTML = "";
  //     password.parentNode.children[4].innerHTML = "Invalid Password !!!";
  //   } else {
  //     setSuccess(password);
  //     password.parentNode.children[1].innerHTML = "請輸入6到20英數字密碼";
  //     password.parentNode.children[4].innerHTML = "";
  //   }

  if (passwordvalue === "") {
    setError(password);
    console.log(password.parentNode);
    password.parentNode.children[2].style.display = "block";
    password.parentNode.children[3].style.display = "none";
    password.parentNode.children[1].innerHTML = "";
    password.parentNode.children[4].innerHTML = "Could not be blank !!!";
  } else if (passwordvalue.length < 6 || passwordvalue.length > 20) {
    setError(password);
    password.parentNode.children[2].style.display = "block";
    password.parentNode.children[3].style.display = "none";
    password.parentNode.children[1].innerHTML = "";
    password.parentNode.children[4].innerHTML = "Invalid Password !!!";
  } else {
    setSuccess(password);
    password.parentNode.children[2].style.display = "none";
    password.parentNode.children[3].style.display = "block";
    password.parentNode.children[1].innerHTML = "請輸入6到20英數字密碼";
    password.parentNode.children[4].innerHTML = "";
  }

  if (checkpasswordvalue === "") {
    setError(checkpassword);
    checkpassword.parentElement.children[3].innerHTML =
      "Could not be blank !!!";
  } else if (passwordvalue !== checkpasswordvalue) {
    checkpassword.parentNode.children[3].innerHTML =
      "This is an incorrect password number !!!";
    setError(checkpassword);
  } else if (checkpasswordvalue.length <= 5 || checkpasswordvalue.length > 20) {
    setError(checkpassword);
    checkpassword.parentNode.children[3].innerHTML =
      "This is an incorrect password number!!!";
  } else {
    setSuccess(checkpassword);
    checkpassword.parentNode.children[3].innerHTML = "";
  }

  if (identificationvalue === "") {
    setError(identification);
    identification.parentElement.children[3].innerHTML =
      "Could not be blank !!!";
  } else if (identificationvalue.length !== 10) {
    setError(identification);
    identification.parentElement.children[3].innerHTML =
      "Invalid Identification !!!";
  } else {
    identification.parentElement.children[3].innerHTML = "";
    setSuccess(identification);
  }

  if (phonenumbervalue === "") {
    setError(phonenumber);
    phonenumber.parentElement.children[3].innerHTML = "Could not be blank !!!";
  } else if (phonenumbervalue.length !== 10) {
    phonenumber.parentNode.children[3].innerHTML = "Invalid Phone Number!!!";
    setError(phonenumber);
  } else {
    phonenumber.parentNode.children[3].innerHTML = "";
    setSuccess(phonenumber);
  }

  //   if (area.value === "") {
  //     setError(area);
  //     street.parentElement.children[3].innerHTML = "Could not be blank !!!";
  //   } else {
  //     setSuccess(area);
  //     street.parentElement.children[3].innerHTML = "";
  //   }

  if (streetvalue === "") {
    setError(street);
    street.parentElement.children[3].innerHTML = "Could not be blank !!!";
  } else {
    setSuccess(street);
    street.parentElement.children[3].innerHTML = "";
  }
}

function setError(input) {
  input.className = "error";
  input.parentNode.children[1].style.display = "block";
  input.parentNode.children[2].style.display = "none";
  //   input.parentNode.className = "fa-solid fa-circle-exclamation";
}

function setSuccess(input) {
  input.className = "success";
  input.parentNode.children[1].style.display = "none";
  input.parentNode.children[2].style.display = "block";
}
