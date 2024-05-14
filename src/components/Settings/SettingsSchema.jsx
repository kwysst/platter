import React from 'react';

import '../../styles/settings/settings-schema.css';

import { LocalStorage } from '../../hooks/LocalStorage';

import { ReactComponent as CloseIcon } from '../../source/icons/close.svg'


export class SettingsSchema extends React.Component {

    // setState & save template in localStorage
    UpdateSchemaState(value) {
		this.setState({ schema: value });
		LocalStorage.SetSchema(value);
	}

    constructor(props) {
        super(props);

        this.state = { schema: this.props.schema };
    }

	render() {
        const { schema } = this.props;
		return <section className='settings-schema'>
            <ul>
            {
                schema.map((schemaItem, i) => 
                    <li className={schemaItem.status ? '' : 'disabled'}
                        key={i++}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) {
                                schema[i-1].status = !schema[i-1].status;
                                this.UpdateSchemaState(schema);
                            }
                        }}
                    >
                        {schemaItem.categoryName}
                        <span>
                            <CloseIcon onClick={() => {
                                schema.splice([i-1], 1);
                                this.UpdateSchemaState(schema);
                            }}/>
                        </span>
                    </li>
                )
            }
            </ul>
        </section>
	}
}