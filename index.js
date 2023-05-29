//Tratando Route Params
const express = require('express');
const server = express();

server.use(express.json())
//localhost:3000/lista/1 //Lista 
//localhost:3000/lista //Listar todos 
const listasArray=[' Filmes ',' Séries ']
//Rota para listar 
server.get('/lista/:indiceInput', (req, res) => {
const {indiceInput} = req.params
return res.json({ lista: `Sua lista de${listasArray[indiceInput]}` })
})
//Rota para listar Todos 
server.get('/lista', (req, res) => {
return res.json(listasArray);
})
//Rota para criar nova lista - Post
server.post('/lista', (req, res) => {
    const {nomeLista} = req.body;
    listasArray.push(nomeLista);
    return res.json(listasArray);

})
//Rota para alterar lista - Put
server.put('/lista/:indice', (req, res) => {
    const { indice } = req.params;
    const { nomeLista } = req.body;
    listasArray[indice]=nomeLista;
    return res.json(listasArray);
})
//Rota para deletar a lista - Delete 
server.delete('/lista/:indice', (req, res) => {
const { indice } = req.params;
listasArray.splice(indice,1);
return res.json(listasArray);
})
server.listen(3000);
