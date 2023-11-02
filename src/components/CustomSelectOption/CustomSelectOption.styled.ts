import styled from 'styled-components'

const StyledContainer = styled.div`
    width: auto;
    display: inline-flex;
    flex-direction: column;
    height: auto;
    border-bottom: 1px solid #000000;

    hr {
        height: 0.5px;
        background-color: black;
        border: 1px solid #000000;
        width: calc(50%);
        position: absolute;
        top: 0;
        left: calc(50% + 2px);
    }

    .searchContainer {
        ul {
            flex-direction: column;
            list-style-type: none;
            background-color: #ffffff;
            z-index: 10;
            min-width: 100%;

            li {
                border: none;
                white-space: nowrap;
                padding: 5px;
                font-size: 16px;

                &:hover {
                    cursor: pointer;
                    background-color: rgb(238 242 255);
                }
            }
        }
    }

    .priceSearch {
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

    @media (min-width: 640px) {
        border: none;
        .clicked {
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            border-right: 2px solid #000000;
            border-bottom: none;
            padding-bottom: 10px;
            background-color: #ffffff;
        }

        .unclicked {
            border: 1px solid #000000;
            padding-bottom: 0;
        }

        .searchContainer {
            ul {
                border-top: none;
                border-left: 2px solid #000000;
                border-right: 2px solid #000000;
                border-bottom: 2px solid #000000;
                padding: 0;
                position: absolute;
                top: 46px;
                left: -2px;
                width: calc(100% + 100%);

                li {
                    width: 100%;
                    border-bottom: 1px solid #000000;

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }

        .priceSearch {
            position: relative;
            z-index: 10;
            width: calc(100% * 3);
        }

        .priceContainer {
            border-left: 2px solid #000000;
            border-right: 2px solid #000000;
            border-bottom: 2px solid #000000;
            position: absolute;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 15px;
            top: 0;
            left: 0;
            padding: 20px;
            width: 100%;
        }

        .hrTop {
            height: 0.5px;
            background-color: black;
            border: 1px solid #000000;
            width: calc(67%);
            position: absolute;
            top: -2px;
            left: calc(32% + 2px);
        }
    }
`

export { StyledContainer }
