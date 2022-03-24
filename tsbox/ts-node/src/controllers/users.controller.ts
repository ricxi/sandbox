// one file per resource type
import { Request, Response, NextFunction } from 'express';

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  const name = req.body.name;

  res.status(200).json({
    id: userId,
    name: name,
  });
};
