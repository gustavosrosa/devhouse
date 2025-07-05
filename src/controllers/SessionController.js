/**
 * index: Listar acessos
 * store: Criar sessao
 * show: Listar uma unica sessao
 * update: Alterar sessao
 * destroy: Deletar sessao
 */
class SessionController {

    store(req, res) {
        return res.json({message: "Logado com sucesso!"});
    }

}

export default new SessionController();