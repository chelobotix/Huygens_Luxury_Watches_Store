import styled from 'styled-components'

const WatchCardElement = styled.li`
    margin: 4px;
    width: 310px;
    height: 470px;
    border: 1px solid ${(props) => props.theme.colors.softGray};
    padding: 2px 4px;
    text-align: center;

    .favorite {
        align-self: flex-end;
        border-radius: 2px;
        border: 1px solid #000000;
    }

    .blurImage {
        width: 250px;
        height: 300px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 0 18px 18px white inset;
    }
`
export { WatchCardElement }
