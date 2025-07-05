import User from "../models/User";

/**
 * index: Listar acessos
 * store: Criar sessao
 * show: Listar uma unica sessao
 * update: Alterar sessao
 * destroy: Deletar sessao
 */
class SessionController {

    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);

        
    }

}

export default new SessionController();