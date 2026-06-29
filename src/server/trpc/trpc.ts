import { initTRPC } from '@trpc/server';
import type { Context } from './context';

/**
 * Initialize tRPC exactly once. Everything else (routers, procedures, callers)
 * is derived from this single instance.
 */
const t = initTRPC.context<Context>().create();

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;

/** Public, unauthenticated procedure. Build protected variants on top of this. */
export const publicProcedure = t.procedure;
