import { Select } from 'antd'
import { SelectElProps } from '@src/types/select'
import { useAppDispatch } from '@app/hooks'
import { updateFilters } from '@features/filter/filterSlice'

const SelectEl = ({ options, defaultValue }: SelectElProps) => {
  const dispatch = useAppDispatch()

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    dispatch(
      updateFilters({
        platform: defaultValue.value === 'Platform' ? value.value : '',
        genre: defaultValue.value === 'Genre' ? value.value : '',
        sort: defaultValue.value === 'Sort by' ? value.value : '',
      })
    )
  }

  return (
    <Select
      labelInValue
      defaultValue={defaultValue}
      style={{ width: 120 }}
      onChange={handleChange}
      options={options.map((option) => ({
        value: option.value,
        label: option.label,
      }))}
    />
  )
}

export default SelectEl
