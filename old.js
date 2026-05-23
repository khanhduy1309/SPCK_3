import {
  auth,
  onAuthStateChanged,
  signOut
} from './firebase-config.js';

// Kiểm tra user đăng nhập
onAuthStateChanged(auth, (user) => {

  const loginLink = document.getElementById('loginLink');
  const profileLink = document.getElementById('profileLink');
  const logoutBtn = document.getElementById('logoutBtn');

  if(user){

    console.log("Đã đăng nhập:", user.email);

    if(loginLink){
      loginLink.style.display = 'none';
    }

    if(profileLink){
      profileLink.style.display = 'inline-block';
    }

    if(logoutBtn){
      logoutBtn.style.display = 'inline-block';
    }

  }else{

    console.log("Chưa đăng nhập");

    if(loginLink){
      loginLink.style.display = 'inline-block';
    }

    if(profileLink){
      profileLink.style.display = 'none';
    }

    if(logoutBtn){
      logoutBtn.style.display = 'none';
    }

  }

});

// Logout
const logoutBtn = document.getElementById('logoutBtn');

if(logoutBtn){

  logoutBtn.addEventListener('click', () => {

    signOut(auth)
      .then(() => {

        alert('Đăng xuất thành công');

        window.location.href = 'login.html';

      })

      .catch((error) => {

        alert(error.message);

      });

  });

}

// Hiệu ứng navbar
window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if(header){

    if(window.scrollY > 50){
      header.style.background = '#000';
    }else{
      header.style.background = '#111';
    }

  }

});

// Nút mua hàng
const buttons = document.querySelectorAll('.card button');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    alert('Đã thêm vào giỏ hàng');

  });

});