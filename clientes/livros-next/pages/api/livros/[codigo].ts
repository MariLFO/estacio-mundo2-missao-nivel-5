import { controleLivro } from '.';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'DELETE':
            try {
                const codigo = Number(req.query.codigo);
                controleLivro.excluir(codigo);
                return res.status(200).json({ message: 'Livro excluído com sucesso' });
            } catch (e) {
                return res.status(500).json({ message: 'Erro ao excluir livro' });
            }
        default:
            return res.status(405).json({ message: 'Método não permitido' });
    }
};