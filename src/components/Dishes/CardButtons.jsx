import React from 'react';

import '../../styles/dishes/dish-btns.css';

import { ReactComponent as ChevronIcon } from '../../source/icons/chevron.svg'
import { ReactComponent as FavouriteIcon } from '../../source/icons/favourite.svg'
import { ReactComponent as BlockIcon } from '../../source/icons/block.svg'
import { ReactComponent as RefreshIcon } from '../../source/icons/refreshBold.svg'

import { LocalStorage } from '../../hooks/LocalStorage';

export class CardButtons extends React.Component {

    oldProps = null;
    isFavState;
    isBlockState;
    UpdatePropsState() { this.oldProps = this.props; }
    isFav = (name) => LocalStorage.GetFavList().find(e => e.name === name) !== undefined;
    isBlock = (name) => LocalStorage.GetBlockList().find(e => e.name === name) !== undefined;

    constructor(props) {
        super(props);

        this.oldProps = this.props;
        
        this.isFavState = this.isFav(this.props.dishData.item.name);
        this.isBlockState = this.isBlock(this.props.dishData.item.name);

        this.state = { 
            active: false,
            isFav: this.isFavState,
            isBlock: this.isBlockState
        }
    }

    render() {
        const { dishData, listIsMenu } = this.props;
        let { isFav, isBlock } = this.state;

        // if props are relevant (state wasn't updated);
		// then render with props;
		if (this.oldProps.dishData.item !== dishData.item) {
			[isFav, isBlock ] = [this.isFav(this.props.dishData.item.name), this.isBlock(this.props.dishData.item.name)];
		}

        console.log(dishData)
        
        return <div className='dish-btn-wrap'>
            <div>
                <FavouriteIcon 
                    className={`
                        ${this.state.active ? 'fav-active' : ''}
                        ${isFav ? 'fav-clicked' : ''}
                    `} 
                    onClick={() => {
                        this.setState({
                            isFav: LocalStorage.ToggleFav(dishData)
                        });
                        // this.UpdatePropsState();
                    }
                }/>
                <BlockIcon 
                    className={`
                        ${this.state.active ? 'block-active' : ''}
                        ${isBlock ? 'block-clicked' : ''}
                    `} 
                    onClick={() => {
                        this.setState({
                            isBlock: LocalStorage.ToggleBlock(dishData)
                        })
                }}/>
                {
                    listIsMenu ? 
                        <RefreshIcon className={`${this.state.active ? 'refresh-active' : ''}`} onClick={() => {
                            this.props.UpdateDish();
                            this.UpdatePropsState();
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