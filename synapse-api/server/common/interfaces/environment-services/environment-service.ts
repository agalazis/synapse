import * as convict from 'convict';
// modelled after convict interface for convenience
export interface IEnvironmentService<T> extends convict.Config {
  getProperties: () => T;
  get(key: keyof T): any;
}
