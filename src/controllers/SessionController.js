import User from "../models/User";
import * as Yup from "yup";

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

        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "E-mail necessário!" })
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);

    }

}

export default new SessionController();