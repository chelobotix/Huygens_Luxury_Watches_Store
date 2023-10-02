import Select, { type SingleValue, components } from 'react-select'
import _ from 'lodash'

interface SelectOptionInputProps {
    options: Array<{ value: string; label: string }>
    label: string
    handleSingleSelection: (event: SingleValue<{ value: string; label: string }>, label: string) => void
}

const SelectOptionButtons = (props: any): JSX.Element => {
    return (
        <components.MenuList {...props}>
            <div>
                <div>{props.children}</div>
                <div>
                    <button>Clear</button>
                    <button>Save</button>
                </div>
            </div>
        </components.MenuList>
    )
}

const SelectOptionInput: React.FC<SelectOptionInputProps> = ({ options, label, handleSingleSelection }) => {
    // function to check if render a single select or multi option select

    const selectMode = (): JSX.Element => {
        if (label !== 'price') {
            if (label === 'gender' || label === 'brand') {
                return (
                    <>
                        <Select
                            options={options}
                            onChange={(event) => {
                                handleSingleSelection(event, label)
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
                            components={{ MenuList: SelectOptionButtons }}
                            placeholder={_.startCase(label)}
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
