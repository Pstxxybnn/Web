document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('dropForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const subject = document.getElementById('subject');
  const agree = document.getElementById('agree');
  const errMsg = document.getElementById('error');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errList = [];

    if (subject.value === "") {
      errList.push("• กรุณาเลือกรายวิชา");
    }

    if (username.value.trim() === "") {
      errList.push("• กรุณากรอกชื่อผู้ใช้");
    }

    if (email.value.trim() === "") {
      errList.push("• กรุณากรอกอีเมล");
    }

    if (password.value.trim() === "") {
      errList.push("• กรุณากรอกรหัสผ่าน");
    } else {
      if (password.value.length < 6) {
        errList.push("• รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร");
      }
      if (!/^[a-zA-Z0-9]+$/.test(password.value)) {
        errList.push("• รหัสผ่านใช้ได้เฉพาะตัวอักษรและตัวเลขเท่านั้น");
      }
    }

    if (!agree.checked) {
      errList.push("• กรุณายอมรับเงื่อนไขการถอนรายวิชา");
    }

    if (errList.length > 0) {
      errMsg.innerHTML = errList.join("<br>");
    } else {
      alert("ถอนรายวิชาสำเร็จ!");
      errMsg.innerHTML = "";
      form.reset();
    }
  });
});