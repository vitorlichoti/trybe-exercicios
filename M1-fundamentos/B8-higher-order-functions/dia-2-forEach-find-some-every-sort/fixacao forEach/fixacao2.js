const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com"
];

const showEmailList = (list) => {
  const div = document.getElementById('email-list');
  div.innerHTML = '';
  list.forEach((email) => {
    const p = document.createElement('p');
    p.innerHTML = `${email}: Enviado com sucesso!`;
    div.appendChild(p);
  });
}

const btn = document.getElementById('btn-filter');
btn.addEventListener('click', () => showEmailList(emailList));
