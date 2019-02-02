import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 30px 0;

    @media screen and (max-width: 768px){
        margin: 10px 0 10px 0;
    }

    @media screen and (max-width: 425px){
        flex-direction: column;
        margin: 0 0 10px 0;
    }
`;