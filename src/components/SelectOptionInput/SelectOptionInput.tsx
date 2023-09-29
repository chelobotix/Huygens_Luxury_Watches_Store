import Select, { components } from 'react-select'
import _ from 'lodash'

interface SelectOptionInputProps {
    options: Array<{ value: string; label: string }>
    label: string
}

const SelectOptionButtons = (props: any): JSX.Element => {
    return (
        <components.MenuList {...props}>
            {props.children}
            <button>Save</button>
        </components.MenuList>
    )
}

const SelectOptionInput: React.FC<SelectOptionInputProps> = ({ options, label }) => {
    // function to check if render a single select or multi option select
    const selectMode = (): JSX.Element => {
        if (label !== 'price') {
            if (label === 'gender' || label === 'brand') {
                return (
                    <>
                        <Select options={options} placeholder={_.startCase(label)} />
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
