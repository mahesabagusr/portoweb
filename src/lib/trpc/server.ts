import 'server-only';
import { cache } from 'react';
import { createCallerFactory } from '@/server/trpc/trpc';
import { appRouter } from '@/server/trpc/routers/_app';
import { createContextInner } from '@/server/trpc/context';

/**
 * Server-side caller for React Server Components. Call procedures directly
 * without an HTTP round-trip, e.g.:
 *
 *   const trpc = await getServerCaller();
 *   const { greeting } = await trpc.hello({ name: 'Mahesa' });
 *
 * `cache` dedupes the caller within a single request.
 */
export const getServerCaller = cache(async () => {
  const ctx = await createContextInner();
  return createCallerFactory(appRouter)(ctx);
});
