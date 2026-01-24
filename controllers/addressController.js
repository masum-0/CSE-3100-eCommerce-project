import Address from "../models/addressModel.js"


export const createAddress = async (req, res) => {
    try {
        const address = await Address.create({
            ...req.body,
            user: req.user._id
        })
        res.status(201).json(address)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user._id })
        res.status(200).json(addresses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}