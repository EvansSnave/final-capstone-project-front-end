import { rest } from 'msw';
import users from 'data';

const handlers = [
  rest.get('http://localhost:4000/users', (req, res, ctx) => res(ctx.status(200), ctx.json([...users]))),
];

export default handlers;
