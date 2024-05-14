import React from 'react';

export class FooterButtons extends React.Component {
	render() {
        const { buttons } = this.props;
		return <section className='footer-btns'>
        {
            buttons.map((button, i) => {
                return <button 
                    key={i++}
                    className={`${!button.enabled ? 'disabled' : ''}`} 
                    onClick={() => {
                        if (button.enabled)
                            button.action();
                }}>{button.icon}</button>
            })
        }
        </section>
	}
};
