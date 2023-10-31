import styled from 'styled-components'

const WatchesStyled = styled.main`
    margin: 10px 20px;

    button {
        color: ${(props) => props.theme.colors.lightBlue};
        text-decoration: underline;
        padding: 5px 0;
    }

    .description {
        overflow: hidden;
        display: -webkit-box;
    }
`

export { WatchesStyled }
