const router = require('express').Router();
const Elemnt = require('../models/element');

async function getElement(req, res, next) {
    let element = null;
    try {
        element = await Elemnt.findById(req.params.id);
        if (element === null) {
            return res.status(404).json({ message: 'Cannot find such element' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.element = element;
    next();
}

async function getElementsBy(req, res, next) {
    let elements = null;
    try {
        elements = await Elemnt.find(req.query);
        if (elements === null) {
            return res.status(404).json({ message: 'Cannot find such elements' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.elements = elements;
    next();
}

router.get('/', async (_, res) => {
    try {
        const elements = await Elemnt.find();
        res.json(elements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/by', getElementsBy, async (_, res) => {
    res.send(res.elements);
})

router.get('/:id', getElement, (_, res) => {
    res.send(res.element);
})

router.route('/').post(async (req, res) => {
    const element = new Elemnt({
        atomicNumber: req.body.atomicNumber,
        atomicMass: req.body.atomicMass,
        symbol: req.body.symbol,
        name: req.body.name
    });
    try {
        const newElement = await element.save();
        res.status(201).json(newElement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.patch('/:id', getElement, async (req, res) => {
    /* eslint-disable eqeqeq */
    if (req.body.atomicNumber != null) {
        res.element.atomicNumber = req.body.atomicNumber;
    }
    if (req.body.atomicMass != null) {
        res.element.atomicMass = req.body.atomicMass;
    }
    if (req.body.symbol != null) {
        res.element.symbol = req.body.symbol;
    }
    if (req.body.name != null) {
        res.element.name = req.body.name;
    }
    /* eslint-enable eqeqeq */
    try {
        const updatedElement = await res.element.save();
        res.status(201).json(updatedElement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.delete('/by', getElementsBy, async (req, res) => {
    try {
        await Elemnt.find(req.query).deleteMany();
        res.json({ message: 'Elements have just been removed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', getElement, async (_, res) => {
    try {
        await res.element.deleteOne();
        res.json({ message: 'Element has been just removed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router