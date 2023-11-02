import styled from 'styled-components'

const MainHeadingStyled = styled.section`
    height: 250px;
    background-image: url('images/banners/heading1.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 640px) {
        height: 100vh;
    }
`

export { MainHeadingStyled }
