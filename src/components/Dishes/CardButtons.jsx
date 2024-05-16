import React from 'react';

import '../../styles/dishes/dish-btns.css';

import { ReactComponent as ChevronIcon } from '../../source/icons/chevron.svg'
import { ReactComponent as FavouriteIcon } from '../../source/icons/favourite.svg'
import { ReactComponent as BlockIcon } from '../../source/icons/block.svg'
import { ReactComponent as RefreshIcon } from '../../source/icons/refreshBold.svg'

import { LocalStorage } from '../../hooks/LocalStorage';

export class CardButtons extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            active: false
        }
    }

    render() {
        const { dishData, listIsMenu } = this.props;
        
        return <div className='dish-btn-wrap'>
            <div>
                <FavouriteIcon className={`${this.state.active ? 'fav-active' : ''}`} onClick={() => {
                    LocalStorage.AddFavourite(dishData);
                }}/>
                <BlockIcon className={`${this.state.active ? 'block-active' : ''}`} onClick={() => {
                    alert('Ведутся технические работы')
                }}/>
                {
                    listIsMenu ? 
                        <RefreshIcon className={`${this.state.active ? 'refresh-active' : ''}`} onClick={() => {
                            this.props.UpdateDish();
                        }}/> :
                        <></>
                }
                <ChevronIcon className={`${this.state.active ? 'chevron-active' : ''}`} onClick={() => {
                    this.setState({ active: !this.state.active })
                }}/>
            </div>
        </div>
    }
}