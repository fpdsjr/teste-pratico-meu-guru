import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersByPaginationUseCase } from './ListUsersByPaginationUseCase';

class ListUsersByPaginationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, limit, param, filter } = request.query;

    const convertQueryTypeParams = {
      pageToNumber: Number(page),
      limitToNumber: Number(limit),
      paramToString: String(param),
      filterToString: String(filter),
    };
    const { pageToNumber, limitToNumber, paramToString, filterToString } = convertQueryTypeParams;

    const listUsersByPaginationUseCase = container.resolve(ListUsersByPaginationUseCase);

    const listUsersByPagination = await listUsersByPaginationUseCase.execute({
      page: pageToNumber,
      limit: limitToNumber,
      filter: paramToString,
      param: filterToString,
    });

    return response.status(200).json(listUsersByPagination);
  }
}

export { ListUsersByPaginationController };
