import express from 'express';

export type RouterType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
