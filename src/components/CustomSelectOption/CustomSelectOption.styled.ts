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
            z-index: 10;
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
            display: flex;
            justify-content: center;
            gap: 5px;
            align-items: center;
            background-color: #ffffff;

            p {
                white-space: nowrap;
            }
        }
        .clicked {
            border-top: 1px solid #000000;
            border-left: 1px solid #000000;
            border-right: 1px solid #000000;
            border-bottom: none;
            font-weight: normal;
            transition: none;
            padding: 5px 15px;
            padding-bottom: 10px;
            z-index: 10;
        }

        .unclicked {
            border: 1px solid #000000;
            padding: 5px 15px;
        }

        .searchContainer {
            width: 90%;
            ul {
                border: 1px solid #000000;
                position: absolute;
                background-color: #ffffff;
                top: -1px;
                z-index: 1;
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
