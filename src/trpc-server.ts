import * as trpcExpress from '@trpc/server/adapters/express';
import * as express from "express";
import { appRouter } from './interface/trpc/routers/_app';
import { createContext } from './interface/trpc/context';

export const trpcApp = express();

trpcApp.use(
  '/',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);