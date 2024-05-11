const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const allContacts = await prisma.contact.findMany();
    res.json(allContacts);
})

app.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber } = req.body
    const newContact = await prisma.contact.create({ 
        data: {
        firstName,
        lastName,
        phoneNumber
        },
    });
    console.log(newContact)
    res.json(newContact);
})

app.put('/:id', async (req, res) => {
    const id = req.params.id;
    const newFirstName = req.body.firstName;
    const updatedContact = await prisma.contact.update({ where: {id: parseInt(id)}, data: {firstName: newFirstName} });
    res.json(updatedContact);
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedContact = await prisma.contact.delete({ where: {id: parseInt(id)} });
    res.json(deletedContact);
})

app.listen(3001, () => console.log('hello'))