import styled from 'styled-components';

export default styled.div`

    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #dedede;
    
    line-height: 1.5;

    .Translation__title {
        font-size: 17px;
        color: #888888;
        margin-bottom: 15px;
    }

    .Translation__title--word {
        color: #08b586;
    }

    .Translation__content {
        font-size: 15px;
        margin-bottom: 15px;
    }

    .Translation__content:last-child {
        margin-bottom: 0;
    }

    .Translation__content--type {
        color: #08b586;
        font-weight: 600;
    }

    .Translation__content--word {
        color: #444444;
    }
`;