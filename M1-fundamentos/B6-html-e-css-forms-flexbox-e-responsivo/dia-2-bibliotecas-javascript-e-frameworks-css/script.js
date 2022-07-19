// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// const validation = new JustValidate('#form');

// validation
//   .addField('#name-text', [
//     {
//       rule: 'minLength',
//       value: 10,
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//     },
//   ])
//   .addField('#email-text', [
//     {
//       rule: 'required',
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Email is invalid!',
//     },
//   ]);