import {controleEditora} from '.'
import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                const codEditora = Number(req.query.codEditora);
                const nomeEditora = controleEditora.getNomeEditora(codEditora);
                res.status(200).json({ nomeEditora });
            } catch (error) {
                res.status(500).json({ error: error });
            }
            break;
        default:
            res.status(405).end();
            break;
    }
};