import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
import classNames from 'classnames';

=======
import classNames from 'classnames';
>>>>>>> 8ea5311b92f0343fd372e8101f64f3253577027a
import removeSvg from '../../assets/img/remove.svg'

import Badge from '../Badge';

import './List.scss';


const List = ({ items, isRemovable, onClick, onRemove }) =>{

    const removeList = (item) => {
        if(window.confirm('Вы действиетльно хотите удалить список?')){
<<<<<<< HEAD
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
              });
=======
            onRemove(item);
>>>>>>> 8ea5311b92f0343fd372e8101f64f3253577027a
        }
    }

    return (
    <ul onClick={onClick} className="list">
        {
            items.map((item, index) => (
            <li key={index} className={classNames(item.className, {active: item.active})}>
<<<<<<< HEAD
                <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
=======
                <i>
                   {item.icon ? (item.icon) : ( <Badge color={item.color} /> )}
                </i>
>>>>>>> 8ea5311b92f0343fd372e8101f64f3253577027a
                <span>{item.name}</span>
                {isRemovable && <img className="list__remove_icon" src={removeSvg} alt="remove icon" onClick={()=>removeList(item)}/>}
            </li> 
            
            ))
        }
       
    </ul>
    );
}; 

export default List;


