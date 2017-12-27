///<reference types="express" />

type middleware = (
	err: any,
	req: Express.Request,
	res: Express.Response,
	next: any
) => any;

declare module 'http-errors-express' {
	const middlewareFn: () => middleware;
	export default middlewareFn;
}
// any json file

declare module '*.json' {
	const value: any;
	export = value;
}
