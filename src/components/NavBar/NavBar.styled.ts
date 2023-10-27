import styled from 'styled-components'

const NavBarStyled = styled.nav`
    .navbarContainer {
        align-items: center;
        border-bottom-width: 1px;
        border-color: ${(props) => props.theme.colors.softGray};
        display: grid;
        grid-template-columns: 1.5fr 3fr 1.5fr;
        padding: 3px;
    }

    .pTitle {
        justify-self: center;
        font-weight: 600;
    }

    .linksBar {
        border-bottom-width: 1px;
        border-color: ${(props) => props.theme.colors.softGray};
        padding: 15px 3px;
        justify-content: center;
        font-weight: 600;
        font-size: 15px;
        gap: 80px;

        li {
        }
    }

    .active {
        color: ${(props) => props.theme.colors.lightBlue};
    }
`

export { NavBarStyled }
