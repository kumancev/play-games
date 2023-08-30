export type SelectValue = {
  value: string
  label: React.ReactNode
}

export type SelectElProps = {
  options: Array<SelectValue>
  defaultValue: SelectValue
}
