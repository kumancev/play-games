import { SelectValue } from '@interfaces/select'

export const formatForSelect = (data: Array<string>): Array<SelectValue> => {
  const selectValueArray: Array<SelectValue> = data.map((category) => ({
    value: category,
    label: category,
  }))

  return selectValueArray
}
