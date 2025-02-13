import styled from 'styled-components';

export default styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    .Result__left{
        width: 49.5%;
    }

    .Result__right{
        width: 49.5%;
    }

    @media screen and (max-width: 1024px){    
        padding: 0 1%;
    }

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        
        .Result__left{
            width: 100%;
        }
        
        .Result__right{
            width: 100%;
        }
    }
`;