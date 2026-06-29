'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import type { AppRouter } from '@/server/trpc/routers/_app';
import { TRPCProvider } from './client';
import { getQueryClient } from './query-client';

function getBaseUrl() {
  // Browser: use a relative URL so requests hit the same origin.
  if (typeof window !== 'undefined') return '';
  // Server (SSR): build an absolute URL.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default function TRPCReactProvider({ children }: { children: React.ReactNode }) {
  // NB: useState (not useMemo) so these instances are stable across renders.
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}
