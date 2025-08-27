// Load header/footer/modal
document.getElementById('header').innerHTML = fetch('shared/header.html').then(r=>r.text()).then(t=>document.getElementById('header').innerHTML=t);
document.getElementById('footer').innerHTML = fetch('shared/footer.html').then(r=>r.text()).then(t=>document.getElementById('footer').innerHTML=t);
document.getElementById('modal-container').innerHTML = fetch('shared/modal.html').then(r=>r.text()).then(t=>document.getElementById('modal-container').innerHTML=t);

// Modal logic
document.addEventListener('DOMContentLoaded', ()=>{
  const loginBtn=document.getElementById('loginBtn');
  const loginModal=document.getElementById('loginModal');
  const resetModal=document.getElementById('resetModal');
  const closeModal=document.getElementById('closeModal');
  const closeReset=document.getElementById('closeReset');
  const forgotBtn=document.getElementById('forgotBtn');
  const registerBtn=document.getElementById('registerBtn');
  const loginSubmit=document.getElementById('loginSubmit');

  loginBtn.addEventListener('click',()=>loginModal.classList.add('show'));
  closeModal.addEventListener('click',()=>loginModal.classList.remove('show'));
  window.addEventListener('click',e=>{if(e.target===loginModal) loginModal.classList.remove('show')});

  forgotBtn.addEventListener('click',()=>{
    loginModal.classList.remove('show');
    resetModal.classList.add('show');
  });
  closeReset.addEventListener('click',()=>resetModal.classList.remove('show'));
  window.addEventListener('click',e=>{if(e.target===resetModal) resetModal.classList.remove('show')});

  registerBtn.addEventListener('click',()=>alert('Fitur Register belum diimplementasikan'));

  loginSubmit.addEventListener('click',()=>{
    const u=document.getElementById('usernameInput').value;
    const p=document.getElementById('passwordInput').value;
    if(u==='fengbayu@gmail.com' && p==='kakanda'){
      alert('Login berhasil!');
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href='pages/dashboard.html';
    } else {
      alert('Username atau password salah');
    }
  });
});
