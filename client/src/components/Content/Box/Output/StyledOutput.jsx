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
        border-radius: 0 20px 20px 0;
        border-width: 1px 1px 1px 0;
        border-style: solid;
        border-color: #dedede;
        box-shadow: 5px 5px 5px #eeeeee;
        background-color: #f7f7f7;

        padding: 20px 30px;

        font-size: 20px;
        color: #444444;
        line-height: 1.5;
    }

    @media screen and (max-width: 1024px){
        textarea {
            border-radius: 0;
        }
    }

    @media screen and (max-width: 425px){
        width: 100%;
        
        textarea {
            /* border: 1px solid #444444; */
            height: 150px;
            background-color: #08b586;
            color: #ffffff;
        }
}`;