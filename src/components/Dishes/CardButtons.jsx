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

        this.isFavState = LocalStorage.isFav(this.props.dish.name);
        this.isBlockState = LocalStorage.isBlock(this.props.dish.name);

        this.state = {
            active: false,
            isFav: this.isFavState,
            isBlock: this.isBlockState
        }
    }

    render() {
        const { dish, listIsMenu } = this.props;
        let isFav = LocalStorage.isFav(dish.name);
        let isBlock = LocalStorage.isBlock(dish.name);

        return <div className='dish-btn-wrap'>
            <div>
                <FavouriteIcon 
                    className={`
                        ${this.state.active ? 'fav-active' : ''}
                        ${isFav ? 'fav-clicked' : ''}
                    `} 
                    onClick={() => {
                        this.setState({
                            isFav: LocalStorage.ToggleFav(dish)
                        });
                    }
                }/>
                <BlockIcon 
                    className={`
                        ${this.state.active ? 'block-active' : ''}
                        ${isBlock ? 'block-clicked' : ''}
                    `} 
                    onClick={() => {
                        this.setState({
                            isBlock: LocalStorage.ToggleBlock(dish)
                        })
                }}/>
                {
                    listIsMenu ? 
                        <RefreshIcon 
                            className={`${this.state.active ? 'refresh-active' : ''}`} 
                            onClick={() => {
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