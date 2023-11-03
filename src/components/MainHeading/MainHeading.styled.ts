import styled from 'styled-components'

const MainHeadingStyled = styled.section`
    display: flex;
    height: 250px;
    background-image: url('images/banners/heading1.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 640px) {
        height: 65vh;
        align-items: center;
        padding-left: 15px;
        margin: 0px 20px;
    }

    @media (min-width: 768px) {
        height: 90vh;
        align-items: center;
        margin: 0px 20px;
    }
`

export { MainHeadingStyled }
