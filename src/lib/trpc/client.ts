import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '@/server/trpc/routers/_app';

/**
 * Type-only import of AppRouter keeps the server bundle out of the client.
 * Consume these in client components: const trpc = useTRPC().
 */
export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
