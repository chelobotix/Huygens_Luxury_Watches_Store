import styled from 'styled-components'

const WatchesStyled = styled.main`
    margin: 0 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .watchesContainer {
        max-width: 1440px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 15px;
    }

    .description {
        overflow: hidden;
        display: -webkit-box;
    }
`

export { WatchesStyled }
