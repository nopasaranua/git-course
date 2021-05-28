document.body.innerHTML = '<h1>Hello from Java script</h1>';
console.log('test !!!!!!');
h1 = document.querySelector('h1');
h1.addEventListener('click', function (){
    this.style.color = 'red';
})