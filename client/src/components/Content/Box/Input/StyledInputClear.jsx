import styled from 'styled-components';

export default styled.a`
    display: ${ props => props.isWords.length > 0 ? 'flex' : 'none'};
    position: absolute;
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }

    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #333;
    }

    :hover:before, :hover:after {
        background-color: #9ffbe2;
    }
    
    :before {
        transform: rotate(45deg);
    }
    
    :after {
        transform: rotate(-45deg);
    }
`;