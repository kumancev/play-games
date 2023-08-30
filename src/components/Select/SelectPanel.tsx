import { formatForSelect } from '@helpers/formatForSelect'
import SelectEl from './SelectEl'
import {
  OPTIONS_GENRE,
  OPTIONS_PLATFORM,
  OPTIONS_SORTBY,
} from '@utils/constants'
import './index.css'

const SelectPanel = () => {
  return (
    <section className='select-panel'>
      <div className='select-wrapper'>
        <SelectEl
          options={formatForSelect(OPTIONS_GENRE)}
          defaultValue={{ value: 'Genre', label: 'Genre' }}
        />
        <SelectEl
          options={formatForSelect(OPTIONS_PLATFORM)}
          defaultValue={{ value: 'Platform', label: 'Platform' }}
        />
      </div>
      <SelectEl
        options={formatForSelect(OPTIONS_SORTBY)}
        defaultValue={{ value: 'Sort by', label: 'Sort by' }}
      />
    </section>
  )
}

export default SelectPanel
