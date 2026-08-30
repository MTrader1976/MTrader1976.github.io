function menu(){document.getElementById('nav').classList.toggle('open')}
function copy(id){navigator.clipboard.writeText(document.getElementById(id).innerText).then(()=>alert('Address copied.'))}
