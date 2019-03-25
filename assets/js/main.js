document.getElementById('copyTextBtn').addEventListener('click', function() {
  let text = 'https://raw.githubusercontent.com/saurav12/css-aid/master/css/cssaid.min.css';
  let aux = document.createElement('input');
  aux.setAttribute('value', text);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  alert('Link Copied!');
})