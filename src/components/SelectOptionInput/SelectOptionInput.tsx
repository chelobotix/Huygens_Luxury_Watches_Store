import _ from 'lodash'
import { useState } from 'react'
import Select, { type MultiValue, type SingleValue } from 'react-select'
import { SelectOptionButtons } from './SelectOptionButton'

interface SelectOptionInputProps {
    options: Array<{ value: string; label: string }>
    label: string
    handleSelection: (
        event: SingleValue<{ value: string; label: string }> | MultiValue<{ value: string; label: string }>,
        label: string
    ) => void
}

const SelectOptionInput: React.FC<SelectOptionInputProps> = ({ options, label, handleSelection }) => {
    const [selection, setSelection] = useState<MultiValue<{ value: string; label: string }>>([])

    // function to check if render a single select or multi option select
    const selectMode = (): JSX.Element => {
        if (label !== 'price') {
            // single options
            if (label === 'gender' || label === 'brand') {
                return (
                    <>
                        <Select
                            options={options}
                            onChange={(event) => {
                                handleSelection(event, label)
                            }}
                            placeholder={_.startCase(label)}
                        />
                    </>
                )
            } else {
                return (
                    <>
                        <Select
                            options={options}
                            isMulti
                            components={{
                                MenuList: (props) => SelectOptionButtons(props, selection, handleSelection, label),
                            }}
                            placeholder={_.startCase(label)}
                            onChange={(event) => {
                                setSelection(event)
                            }}
                        />
                    </>
                )
            }
        }
        return <></>
    }

    return <div>{selectMode()}</div>
}

export { SelectOptionInput }
