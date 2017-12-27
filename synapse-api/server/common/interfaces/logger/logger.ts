import { Request, Response } from 'express';

export interface ILogger {
  info(...message: any[]) :void;

  debug(...message: any[]) :void;

  error(...message: any[]) :void;

  logAPITraceOut(req: Request, res: Response, message?: any): void;

  logAPITrace(req: Request, res: Response, statusCode: number, message?: any): void;

  setUUID(uuid: string): void;

  getUUID(): void;
}