import React from 'react'
import { Link } from 'react-router-dom';

import {ButtonBlock} from './styles.js'

const ButtonLink = ({text, link, onClick}) => {
    return (
        <> 
            <Link to={link}>
                <ButtonBlock onClick={onClick}>{text}</ButtonBlock>
            </Link> 
        </>
    );
}
    
export default ButtonLink; 