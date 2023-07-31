import React from 'react'
import { ButtonAdd } from './button.style'
import { Link } from 'react-router-dom';
import {GrFormAdd} from 'react-icons/gr'
import { Div } from './button.style';
function ButtonAdc() {
    return (
        <Div>
            <Link to='/novoalbum'>
                <ButtonAdd>
                    <GrFormAdd id='icon-add'/>
                </ButtonAdd>
            </Link>
        </Div>
    )
}

export default ButtonAdc;