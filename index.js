const event = require('events')
const util= require('util')

var eventEmitter= new event.EventEmitter()
eventEmitter.on("click", function(msg){
    console.log(msg)
})

eventEmitter.emit('click', "evnt s trigered")
//const person = function()

var person = function (name){
    this.name=name
}

util.inherits(person, event.EventEmitter);

var p1 = new person("p1")
var p2= new person("p2")
var ary= [p1,p2]

ary.forEach(function(person){
    person.on('spk', function(msg){
        console.log(msg)
    })
});

p2.emit('spk', "hru")
p1.emit('spk', "hey")