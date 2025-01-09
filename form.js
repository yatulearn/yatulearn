// submit form
const input = document.querySelector("input");
const foorm = document.querySelector("form");
function start() {
  if (input.value == "") {
    var aTag = document.createElement('a');
    aTag.setAttribute('href', "yatu_learn_qp.html");
    aTag.innerText = "Question paper";
    aTag.innerText.style.display = "none";
    foorm.appendChild(aTag);
  } else {
    var aTag = document.createElement('a');
    aTag.setAttribute('href', "yatu_learn_qp.html");
    aTag.innerText = "Question paper";
    foorm.appendChild(aTag);
  }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyD4y3-S3JCpA57XFI5-PMqTmKWwP-VgDcD6vwWMjPNdjhPbRJ1EPxQgxF3RhBsZH1RDw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


