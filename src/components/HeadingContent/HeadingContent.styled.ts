import styled from 'styled-components'

const HeadingContentS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    h1 {
        font-size: 25px;
        text-align: center;
        font-weight: 600;
        line-height: 2.5rem;
    }

    @media (min-width: 640px) {
        align-items: start;
        h1 {
            font-size: 30px;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
            text-align: left;
            max-width: 350px;
        }
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 40px;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
            line-height: 3rem;
            max-width: 450px;
        }
    }
`

export { HeadingContentS }
