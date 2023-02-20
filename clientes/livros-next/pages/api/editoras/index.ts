import ControleEditora from "@/classes/controle/ControleEditora";
import {NextApiRequest, NextApiResponse} from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                const editoras = controleEditora.getEditoras()
                res.status(200).json(editoras)
            } catch (error) {
                res.status(500).json({ message: 'Erro ao obter editoras' });
            }
            break;
        default:
            res.status(405).json({ message: 'Método não permitido' })
            break;
    }
}