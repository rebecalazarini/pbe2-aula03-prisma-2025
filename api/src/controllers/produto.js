const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const dados = req.body;
    dados.subTotal = dados.qtd * dados.preco;
    try {
        const produto = await prisma.produto.create({
            data: dados,
        });
        res.status(201).json(produto).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const produtos = await prisma.produtos.findMany();
    res.json(produtos);
}

const readOne = async (req, res) => {
    const produtos = await prisma.produtos.findMany({
        where:{
            id: Number(req.params.id)
        },
        include:{
            cliente: true
        }
    });
    res.json(produtos);
}

const update = async (req, res) => {
    try {
        const produto = await prisma.produto.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(produto).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const produto = await prisma.produto.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(produto).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}