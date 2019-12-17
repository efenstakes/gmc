import styled from 'styled-components';

// row with space between
export const Row = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    div, p {
        background-color: transparent;
    }
`
//section of the page with blue background
export const BlueContainer = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    background-color: blue;
    div, p {
        background-color: transparent;
    }
`

//section with reasons to join
export const ReasonsToJoin = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: grey;
    div, p {
        background-color: transparent;
    }
    .isometric-and-text-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

//section with partners
export const Partners = styled.div `
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .partners-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            margin: 10px;
        }
    }
`

//page wrapper
export const Page = styled.div`
    max-width: 80%;
    margin: auto auto;
`