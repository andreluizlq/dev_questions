import React from 'react'
import {ButtonLess, ButtonMore, CountBlock} from './styles.js'
import {useCount} from '../../context/Count.js';


const Count = () => {
   
    const {count, setCount} = useCount();

    function countLess(){
        if(count>1){
            setCount( count - 1 )
        }
        else{
            setCount( count )
        }
    }

    return (
        <> 
            <CountBlock>
                <ButtonLess onClick={() => setCount(countLess)} alt="less">-</ButtonLess>
                <p>{count}</p>
                <ButtonMore onClick={() => setCount(count + 1)} alt="more">+</ButtonMore>
            </CountBlock>
        </>
    );
}
    
export default Count;