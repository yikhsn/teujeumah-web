import styled from 'styled-components';

export default styled.div`
    width: 50%;
    display: flex;
    position: relative;

    textarea {
        resize: none;
        outline: none;
    
        width: 100%;
        height: 200px;
        border-radius: 20px 0 0 20px;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: #dedede;
        box-shadow: 5px 5px 5px #eee;
    
        padding: 20px 30px;
    
        font-size: 20px;
        color: #444444;
        font-weight: 500;
        line-height: 1.5;
    }

    textarea:focus, textarea:hover {
        border-color: #9ffbe2;
        border-width: 1px;
    }

    @media screen and (max-width: 1024px){
        textarea {
            border-radius: 0;
        }
    }

    @media screen and (max-width: 425px){
        width: 100%;
        
        textarea {
            border: 0;
            height: 150px;
        }
    }
`;