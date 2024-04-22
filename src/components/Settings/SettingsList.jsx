import React from 'react';
import { ReactComponent as EyeIcon } from '../../source/icons/eye.svg'
import { ReactComponent as EyeSlashIcon } from '../../source/icons/eye-slash.svg'
import { ReactComponent as CloseIcon } from '../../source/icons/close.svg'
import '../../styles/settings/settings-list.css';

export default class SettingsList extends React.Component {

	render() {
        const { schema, UpdateSchemaState } = this.props;
		return <>
            <ul className='settings-list'>
                {
                    schema.map((e, i) => 
                        <li className={e.status ? '' : 'settings-list-disabled'}
                            key={i++}
                            onClick={(event) => {
                                if (event.target === event.currentTarget) {
                                    schema[i-1].status = !schema[i-1].status;
                                    UpdateSchemaState(schema);
                                }
                            }}
                        >{e.categoryName}
                            <span>
                                {e.status ? 
                                    <EyeIcon className='settings-list-icon' onClick={() => {
                                        schema[i-1].status = !schema[i-1].status;
                                        UpdateSchemaState(schema);
                                    }}/> : 
                                    <EyeSlashIcon className='settings-list-icon' onClick={() => {
                                        schema[i-1].status = !schema[i-1].status;
                                        UpdateSchemaState(schema);
                                    }}/>}
                                <CloseIcon className='settings-list-icon' onClick={() => {
                                    schema.splice([i-1], 1);
                                    UpdateSchemaState(schema);
                                }}/>
                            </span>
                        </li>
                    )
                }
            </ul>
        </>
	}
}

export { SettingsList };
