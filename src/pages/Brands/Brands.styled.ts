import styled from 'styled-components'

const BrandsContainer = styled.main`
    margin: 50px auto 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 600;
        margin-bottom: 10px;
    }

    .ulLetters {
        display: flex;
        flex-wrap: wrap;
        font-weight: 500;
        gap: 9px;
    }

    .ulBrands {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .bannerContainer {
        width: 100%;
        margin-top: 50px;
    }

    .banner {
        width: 50%;
        padding: 5px;
    }

    @media (max-width: 640px) {
        .bannerContainer {
            width: 100%;
        }

        .banner {
            width: 50%;
            height: 150px;
            padding: 5px;
            object-fit: cover;
        }
    }

    @media (min-width: 640px) {
        .ulLetters {
            gap: 20px;
        }
    }
`

export { BrandsContainer }
