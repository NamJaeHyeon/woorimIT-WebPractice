"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", register);
console.log("hello register");
function register(){
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value
  };
  console.log(req);

  fetch("/register",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.errror("로그인 중 에러 발생");
    });
}