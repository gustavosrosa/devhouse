import House from "../models/House";

class HouseController {

    async index(req, res) {
        const { status }  = req.query;

        const houses = await House.find({ status });

        return res.json(houses);
    }

    async store(req, res) {

        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.json(house);
        
    }

    async update(req, res) {

        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;
        const { house_id } = req.params;

        const houses = await House.updateOne({ 
            _id: house_id,
        }, {
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.json({houses});
    }
}

export default new HouseController();