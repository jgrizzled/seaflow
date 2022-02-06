// HTTP fetch utils

const retryOn = [503, 429]; // HTTP status codes
const maxTries = 3;
const retryInterval = 1; // seconds

// fetch wrapper with retries
export async function retryFetch(
  url: RequestInfo,
  options?: RequestInit
): Promise<Response> {
  let response: Response;
  let tries = 0;
  while (tries < maxTries) {
    tries++;
    try {
      response = await fetch(url, options);
    } catch (e) {
      if (tries >= maxTries) throw e;
      console.error(e);
      await timeout(retryInterval);
      continue;
    }
    if (response.ok) return response;
    const err = `HTTP error ${response.status}: ${
      response.statusText
    } from ${url.toString()}`;
    if (!retryOn.includes(response.status)) throw new Error(err);
    console.error(err);
    await timeout(retryInterval);
  }
  throw new Error(`Hit max retries for ${url.toString()}`);
}

// https://github.com/microsoft/TypeScript/issues/1897#issuecomment-822032151
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export interface JSONObject {
  [k: string]: JSONValue;
}

// JSON fetch helper
export async function fetchJSON(
  url: RequestInfo,
  options?: RequestInit
): Promise<JSONObject> {
  const response = await retryFetch(url, options);
  const json = (await response.json()) as JSONObject;
  if (typeof json == 'object' && json !== null && !Array.isArray(json)) return json;
  throw new Error(`Non-object response from ${url.toString()}`);
}

// URL helper
export function constructURL(
  baseURL: string,
  path = '',
  params: { [key: string]: string } = {}
): string {
  const concat_url = baseURL.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '');
  const url = new URL(concat_url);
  const _params = new URLSearchParams(params);
  url.search = _params.toString();
  return url.href;
}

// await s seconds
async function timeout(s: number) {
  return await new Promise(res => setTimeout(res, s * 1000));
}
