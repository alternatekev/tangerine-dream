import {Dictionary} from '@td/types'

export const formatACFFields = (fields: Dictionary): string => {
  return `
    ?${Object.keys(fields).map(f => `fields[${f}]=${fields[f]}&`)}
  ` 
}
