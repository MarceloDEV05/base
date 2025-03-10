//importando o modulo
import event from 'events'

//criando instância do objeto eventEmitter
const eventEmissor = new event.EventEmitter()

//função emissora do evento a ser disparado
//'event' é a palavra que este trecho esta esperando ser emitida
eventEmissor.on('event', ()=> {
console.log('evento disparadoo...')
}) 

//aqui estou emitindo a palavra 'event' e ira disparar um evento
eventEmissor.emit('event')


//chamando minha instancia
const newEvent = eventEmissor

//função emissora do evento a ser disparado
//'msg' é  a palavra que este trecho esta esperando ser emitida
newEvent.on('msg', ()=> {
    console.log('Hello world, coding with node.js event module.')
})

//emitindo a palavra que vai disparar o evento
newEvent.emit('msg')

