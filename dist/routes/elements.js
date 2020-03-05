"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require('express').Router();
const Elemnt = require('../models/element');
function getElement(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let element = null;
        try {
            element = yield Elemnt.findById(req.params.id);
            if (element === null) {
                return res.status(404).json({ message: 'Cannot find such element' });
            }
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
        res.element = element;
        next();
    });
}
function getElementsBy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let elements = null;
        try {
            elements = yield Elemnt.find(req.query);
            if (elements === null) {
                return res.status(404).json({ message: 'Cannot find such elements' });
            }
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
        res.elements = elements;
        next();
    });
}
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const elements = yield Elemnt.find();
        res.json(elements);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.get('/by', getElementsBy, (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(res.elements);
}));
router.get('/:id', getElement, (_, res) => {
    res.send(res.element);
});
router.route('/').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const element = new Elemnt({
        atomicNumber: req.body.atomicNumber,
        atomicMass: req.body.atomicMass,
        symbol: req.body.symbol,
        name: req.body.name
    });
    try {
        const newElement = yield element.save();
        res.status(201).json(newElement);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.patch('/:id', getElement, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const updatedElement = yield res.element.save();
        res.status(201).json(updatedElement);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.delete('/by', getElementsBy, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Elemnt.find(req.query).deleteMany();
        res.json({ message: 'Elements have just been removed successfully' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.delete('/:id', getElement, (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.element.deleteOne();
        res.json({ message: 'Element has been just removed successfully' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
module.exports = router;
//# sourceMappingURL=elements.js.map