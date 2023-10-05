import styled from 'styled-components'

interface StyledContainerProps {
    isVisible: boolean
    isMulti: boolean
}

const StyledContainer = styled.div<StyledContainerProps>`
    background-color: aquamarine;
    border: solid 1px black;
    width: auto;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    height: auto;

    .divAbsolute {
        /* position: absolute; */
        top: 100%;
        left: 0;
        z-index: 1;

        p {
            margin: 0;
        }

        ul {
            display: ${(props) => (props.isVisible ? 'flex' : 'none')};
            flex-direction: column;
            list-style-type: none;
            padding: 0;

            li {
                border: solid 1px black;
                padding: 0;
                background-color: white;
                padding: 5px 2px;

                &:hover {
                    cursor: pointer;
                    background-color: rgb(238 242 255);
                }
            }
        }

        p {
            color: green;
        }
    }

    .selected {
        font-weight: bold;
    }
`

export { StyledContainer }
