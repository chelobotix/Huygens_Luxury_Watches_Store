import styled from 'styled-components'

const WatchesStyled = styled.main`
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        display: flex;
        justify-content: center;
        width: 90%;
        gap: 15px;
    }

    .description {
        overflow: hidden;
        display: -webkit-box;
    }
`

export { WatchesStyled }
