import { QueryClient, defaultShouldDehydrateQuery } from '@tanstack/react-query';

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Avoid immediate refetch on the client right after SSR hydration.
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // Include pending queries so streamed/prefetched data hydrates cleanly.
        shouldDehydrateQuery: query =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

/**
 * Server: always a fresh client (never share state across requests).
 * Browser: reuse a single client for the lifetime of the tab.
 */
export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
