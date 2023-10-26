import styled from 'styled-components'

const NavBarStyled = styled.nav`
    .navbarContainer {
        display: grid;
        grid-template-columns: 1.5fr 3fr 1.5fr;
        align-items: center;
        border-bottom: 2px;
        border-color: ${(props) => props.theme.colors.softGray};
        padding: 3px;
    }

    @media (min-width: 640px) {
        .navbarContainer {
            background-color: ${(props) => props.theme.colors.darkBlue};
            font-size: 14px;
        }
    }
`

export { NavBarStyled }
