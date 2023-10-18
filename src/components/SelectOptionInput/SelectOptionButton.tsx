import { components, type SingleValue, type MultiValue } from 'react-select'

const SelectOptionButtons = (
    props: any,
    selection: MultiValue<{ value: string; label: string }>,
    handleSelection: (
        event: SingleValue<{ value: string; label: string }> | MultiValue<{ value: string; label: string }>,
        label: string
    ) => void,
    label: string
): JSX.Element => {
    return (
        <components.MenuList {...props}>
            <div>
                <div>{props.children}</div>
                <div>
                    <button>Clear</button>
                    <button
                        onClick={() => {
                            handleSelection(selection, label)
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </components.MenuList>
    )
}

export { SelectOptionButtons }
