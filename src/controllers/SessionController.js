import User from "../models/User";

class SessionController {

    async store(req, res) {

        const { email } = req.body;

        // Verificando se usuario ja existe
        let user = await User.findOne({ email });

        // Se usuario nao existir ele vai criar um novo
        if (!user) {
           user = await User.create({ email })
        }

        // Irá retornar um Json com informacao do usuario
        return res.json(user);
    }

}

export default new SessionController();