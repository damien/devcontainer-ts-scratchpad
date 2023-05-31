/**
 * Create a promise that resolves after a specified duration.
 * @example
 * // Resolves after 10 seconds
 * await sleep(10000)
 * @param ms Duration in milliseconds
 */
export function sleep(ms: number): Promise<unknown> {
  return new Promise((resolve: any) => {
    setTimeout(resolve, ms)
  })
}

/**
 * Construct a promise that is rejected after a specified duration with an error.
 * 
 * @example
 * // Promise is rejected after 1 second
 * await expire(1000)
 * @param ms Time in milliseconds
 * @returns A promise that is rejected after `ms` milliseconds
 */
export function expire(ms: number): Promise<never> {
  return new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(Error("Promise timed out after " + ms + "ms"))
    }, ms)
  })
}
