//console.log("hola mundo desde la console");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(400)
    .deleteChars(6)
    .typeString('<strong>PROGRAMAR!</strong>')
    .pauseFor(2500)
    .start();
