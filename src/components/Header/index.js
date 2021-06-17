import React from 'react'

import {HeaderBlock} from './styles.js'

const Header = (props) => {
    return (
        <> 
            <HeaderBlock {...props}>
                <img src="/logo.svg" alt='logo'/>
            </HeaderBlock>
        </>
    );
}
    
export default Header; 