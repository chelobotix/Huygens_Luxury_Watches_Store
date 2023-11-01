import styled from 'styled-components'

const StyledContainer = styled.div`
    border-bottom: solid 1px black;
    width: auto;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    height: auto;

    .searchContainer {
        p {
            margin: 0;
        }

        ul {
            flex-direction: column;
            list-style-type: none;
            padding: 0;

            li {
                display: flex;
                justify-content: center;
                border: none;
                padding: 5px 2px;
                font-size: 16px;

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

    .priceSearch {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        gap: 10px;

        .minMax {
            display: flex;
            justify-content: center;
            gap: 15px;

            > div {
                border: 1px solid #000000;
                display: flex;
                flex-direction: column;
                width: 50%;
                height: 50px;

                .priceTitle {
                    font-size: 12px;
                    padding-left: 9px;
                    color: ${(props) => props.theme.colors.darkGray};
                }

                .amountContainer {
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }

    .buttonsContainer {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 15px;
    }

    .selected {
        font-weight: bold;
    }

    .visible {
        display: flex;
    }

    .invisible {
        display: none;
    }

    @media (min-width: 640px) {
    }
`

export { StyledContainer }
