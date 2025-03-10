import url from 'url'

//divide o endereço web em partes legíveis

const adress = 'http://localhost:8080/default.htm?year=2017&month=february'
const infos = url.parse(adress, true)

console.log(infos.host); //retorna 'localhost:8080'
console.log(infos.pathname)//retorna 'defaut.htm'
console.log(infos.search)//retorna '?year=2017&month=february'

const infoData = infos.query
//retorna o valor definido no parametro month dentro do endereço
console.log(infoData.month)

//retorna o valor definido no paramentro year dentro do endereço
console.log(infoData.year)