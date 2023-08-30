import { Select } from 'antd'
import { SelectElProps } from '@interfaces/select'

const SelectEl = ({ options, defaultValue }: SelectElProps) => {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value)
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
