import 'server-only';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

/**
 * Inner context — built without HTTP request objects so it can be reused by
 * server-side callers and tests. Add shared resources (db, session) here.
 */
interface CreateInnerContextOptions {
  headers?: Headers;
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    headers: opts?.headers,
  };
}

/**
 * Outer context — created per HTTP request by the fetch adapter. Wraps the
 * inner context and exposes the raw request/response headers.
 */
export async function createContext(opts: FetchCreateContextFnOptions) {
  const inner = await createContextInner({ headers: opts.req.headers });
  return {
    ...inner,
    req: opts.req,
    resHeaders: opts.resHeaders,
  };
}

/** Procedures are typed against the inner context for testability. */
export type Context = Awaited<ReturnType<typeof createContextInner>>;
