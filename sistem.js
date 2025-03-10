//Conhecendo o FileSystem (fs) do node
import dateTime from './module.js'
import fs from 'fs'

dateTime

//lendo arquivo .txt com readFile
const sistem = fs.readFile('response.txt','utf8', (err, data) => {
    if (err){
        return err
    } else{
        console.log(data)
    }
})
console.log(sistem)

//trocando o texto do arquivo com writeFile
const trocaDeTexto = fs.writeFile('response.txt', 'trocando texto de arquivo .txt', (err)=> {
    if (err) throw err
    console.log('texto trocado')
})
console.log(trocaDeTexto)

//adicionando arquivos e adicionando conteúdo com appendFile
//criando arquivo .txt com o texto "hello  world"
const addFile = fs.appendFile('newFile.txt', 'hello world', (err)=>{
    if (err) throw err

    console.log('saved')
})
console.log(addFile)


const addNewFile = fs.appendFile('testFile.html', 'OLÁ', (err) => {
    if (err) throw err

    console.log('arquivo criado com sucesso')
})
console.log(addNewFile)


//deletando arquivo

const removeFile = fs.unlink('testFile.html', (err)=>{
    if (err) throw err
    console.log('arquivo deletado com sucesso')
})

console.log(removeFile) //arquivo 'testFile.html deletado com sucesso'