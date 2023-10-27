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
`
export { WatchCardElement }
