import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 5px;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #eaeaea;
    }

    .clicked {
        text-decoration: underline;
        font-weight: 700;
        border: none;
        transition: all 0.3s ease-in-out;
    }

    .unclicked {
        border-bottom: 1px solid #eaeaea;
    }

    .searchContainer {
        ul {
            flex-direction: column;
            align-items: center;
            list-style-type: none;
            background-color: #ffffff;
            z-index: 5;
            min-width: 100%;

            li {
                border: none;
                white-space: nowrap;
                padding: 5px;
                font-size: 16px;
                text-align: center;

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
    // MEDIA min-width: 640px

    @media (min-width: 640px) {
        .title {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: start;
            gap: 5px;
            align-items: center;
            background-color: #ffffff;
            padding: 5px 15px;
            p {
                white-space: nowrap;
            }
        }
        .unclicked {
            outline: 1px solid #000000;
        }

        .clicked {
            text-decoration: none;
            box-shadow:
                inset -2px 0 0 0 #0d0d0d,
                inset 2px 0 0 0 #0d0d0d,
                inset 0 2px 0 0 #0d0d0d,
                inset 0 -2px 0 0 #fff;
            font-weight: normal;
            transition: none;
            z-index: 5;
        }

        .space {
            width: 90%;
            height: 20px;
            z-index: 10;
        }

        .spacePrice {
            width: 100%;
            height: 20px;
            z-index: 0;
        }

        .border1 {
            border-left: 2px solid #000000;
            border-right: 2px solid #000000;
            background-color: #ffffff;
        }

        .border2 {
            border: none;
            background-color: transparent;
        }

        .searchContainer {
            width: 90%;
            ul {
                width: calc(100% * 2);
                border: 2px solid #000000;
                position: absolute;
                background-color: #ffffff;
                border: 2px solid #000000;
                top: -2px;

                li {
                    padding-right: 50px;
                    border-bottom: 1px solid #000000;
                    text-align: left;

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }

        .priceSearch {
            position: relative;
            width: 100%;
            z-index: 1;
            gap: 3px;
        }

        .priceContainer {
            width: calc(100% * 2);
            border: 2px solid #000000;
            position: absolute;
            background-color: #ffffff;
            width: 400px;
            padding: 20px;
            top: -7px;
            left: 0px;
        }
    }
`

export { StyledContainer }
