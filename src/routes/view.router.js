import express from 'express';

const viewRouter = express.Router();

const food = [
    { name: "Hamburguesa", price: "100" },
    { name: "Banana", price: "20" },
    { name: "Soda", price: "40" },
    { name: "Ensalada", price: "120" },
    { name: "Pizza", price: "150" },
];

viewRouter.get('/', (req, res) => {
    res.render('home', {
        food: food
    });
});

viewRouter.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {
        food: food
    });
});

export { viewRouter, food }; 
