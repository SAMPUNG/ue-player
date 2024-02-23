export interface PixelStreamingData {
  Code: '0' | '1' | '2' | '3'
  Data: string | null
  Result: string
}
export type PixelStreamingPromise = Promise<string>

