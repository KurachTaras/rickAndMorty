export interface IInfo<Data> {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: null
  },
  results: Data[],
}
