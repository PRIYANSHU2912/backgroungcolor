const p = document.querySelectorAll('.button');
const body = document.querySelector('body');
p.forEach(function (m) {
    m.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
            body.style.color='black';
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            body.style.color='black';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
            body.style.color='white';
         }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
            body.style.color='black';
         }

    })
})