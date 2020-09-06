import { Router, Request, Response } from 'express';

const obrasRouter = Router();

obrasRouter.get('/', (request: Request, response: Response) =>
  {
    const obraInicial = {
      id: 1,
      titulo: 'Invasão vertical dos bárbaros',
      editora: 'É Realizações',
      foto: 'https://www.erealizacoes.com.br/upload/produto/231/galeria/zoom_invasao-vertical-dos-barbaros1000x1282.jpg',
      autores: [
        'Mario Ferreira dos Santos'
      ]
    }

    return response.json(obraInicial);
  }
)

export default obrasRouter;
