import House from '../models/House';
import User from '../models/User';

class HouseController {

    // Buscar uma casa pelo status retornado
    async index(req, res) {

        const { status } = req.query;

        const houses = await House.find({ status })

        return res.json(houses)
    }

    // Criar uma nova casa
    async store(req, res) {

        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;
        
        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description, // Nao precisa dos dois pontos por que é o mesmo nome do schema do banco
            price, 
            location, status
        })

        return res.json(house)
    }

    async update(req, res) {

        const { filename } = req.file;
        const { id } = req.params;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        // Ver qual o usuário que está logado
        const user = await User.findById(user_id);
        const houses = await House.findById(id);

        if (String(user._id) !== String(houses.user)) {
            res.status(401).json({message: 'Usuário não autorizado!'})
        }

        await House.updateOne({ _id: id }, {
            user: user_id,
            thumbnail: filename,
            description, // Nao precisa dos dois pontos por que é o mesmo nome do schema do banco
            price, 
            location, status
        });

        return res.send();
    }

    async destroy(req, res) {
        const { id } = req.params;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(id);

        console.log(houses)

        if (houses && houses.user && String(user._id) !== String(houses.user)) {
            res.status(401).json({message: 'Usuário não autorizado!'})
        }

        await House.findByIdAndDelete({ _id: id });

        res.json({message: 'Casa excluída com sucesso!'});
    }
}

export default new HouseController();