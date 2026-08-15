import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const appRouter = createTRPCRouter({
  /** Simple liveness probe — useful to verify the wiring end-to-end. */
  health: publicProcedure.query(() => ({
    status: 'ok' as const,
    timestamp: new Date().toISOString(),
  })),

  /** Example query with validated input. */
  hello: publicProcedure
    .input(z.object({ name: z.string().min(1).optional() }))
    .query(({ input }) => ({
      greeting: `Hello, ${input.name ?? 'world'}!`,
    })),
});

/** Export ONLY the type — never import this router's value into client code. */
export type AppRouter = typeof appRouter;
