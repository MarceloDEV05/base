//Conhecendo o FileSystem (fs) do node
import fs from 'fs'


const sistem = fs.readFile('response.txt','utf8', (err, data) => {
    if (err){
        return err
    } else{
        console.log(data)
    }
})

console.log(sistem)