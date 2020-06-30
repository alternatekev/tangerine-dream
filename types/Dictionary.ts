export type Dictionary = { [index: string]: string }
// tslint:disable-next-line no-any
export function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}
