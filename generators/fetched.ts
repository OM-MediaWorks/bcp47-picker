// await caches.delete('fetched')
const cache = await caches.open('fetched')

const stubs: Map<string, any> = new Map()

const debug = false
const dumpOutput = false

export async function fetched(
  url: string | URL,
  options: RequestInit = {},
): Promise<Response> {
  if (stubs.has(url.toString())) {
    const stub = stubs.get(url.toString())
    return new Response(typeof stub === 'object' ? JSON.stringify(stub) : stub)
  }

  if (debug) console.log(url.toString())

  if (options.method === 'POST') return fetch(url, options)
  const request = new Request(url, options)

  const cacheMatch = await cache.match(request)
  if (cacheMatch && !dumpOutput) {
    cacheMatch.headers.set('x-cache-hit', 'true')
    return cacheMatch
  }

  const response = await fetch(url, options);
  if (response.status === 200) {
    await cache.put(request, response.clone())
  }

  if (dumpOutput) {
    const text = await (response.clone()).text()
    console.log(text)
  }

  return response
}

fetched.setTest = (url: string, jsonResponse: any) => {
  stubs.set(url, jsonResponse)
}