import Reserve from "../models/Reserve";
import User from "../models/User";
import House from "../models/House";

class ReserveController {

    async store(req, res) {
        const { user_id } = req.headers;
        const { date, id } = req.body;
        const { house_id } = req.params;

        const user = await User.findById(user_id);
        const house = await House.findById(house_id.toString());
        
        if (!house) {
            return res.status(400).json({ error: "Essa casa não existe!" });
        }

        if (house.status != true) {
            return res.status(400).json({ error: "Solicitacao indisponivel!" });
        }

        if (String(user._id) === String(house.user)) {
            return res.status(400).json({ error: "Não é possível reservar a própria casa!" });
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        });

        await reserve.populate(['house', 'user']);

        return res.json(reserve);
    }

}

export default new ReserveController();