//Conhecendo o FileSystem (fs) do node
import {dateTime} from './module.js'
import fs from 'fs'


const sistem = fs.readFile('response.txt','utf8', (err, data) => {
    if (err){
        return err
    } else{
        console.log(data)
    }
})

const trocaDeTexto = fs.writeFile('response.txt', 'trocando texto de arquivo .txt', (err)=> {
    if (err) throw err
    console.log('texto trocado')
})

console.log(trocaDeTexto)

console.log(sistem + dateTime)


