export interface IHttpError extends Error {
  status: number;
  statusCode: number;
  expose: boolean;
  headers?: {
      [key: string]: string;
  };
  [key: string]: any;
}