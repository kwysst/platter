import React from 'react';
import '../../styles/settings/settings-list.css';
import ListSelect from './ListSelect';

export default class SettingsList extends React.Component {

    constructor(props) {
        super(props);

        let schema = this.props.LocalDB.GetSchema();
			
		this.state = { adding: false, schema: schema };
		this.props.LocalDB.SetSchema(schema);
    }

    // setState & save in localStorage
	UpdateSchemaState(value) {
		this.setState({ schema: value });
		this.props.LocalDB.SetSchema(value);
	}

	render() {
        const { schema } = this.state;
		return <>
            <ul className='settings-list'>
                {
                    schema.map((e, i) => 
                        <li className={e.status ? '' : 'settings-list-disabled'}
                            key={i++}
                            onClick={(event) => {
                                if (event.target === event.currentTarget) {
                                    schema[i-1].status = !schema[i-1].status;
                                    this.UpdateSchemaState(schema);
                                }
                            }}
                        > {e.categoryName}
                            <span>
                                {/* <i className='settings-list-icon'></i> */}
                                <i className={`settings-list-icon settings-${e.status ? '' : 'un'}visibility-icon`} onClick={(e) => {
                                    schema[i-1].status = !schema[i-1].status;
                                    this.UpdateSchemaState(schema);

                                }}></i>
                                <i className='settings-list-icon settings-close-icon' onClick={() => {
                                    schema.splice([i-1], 1);
                                    this.UpdateSchemaState(schema);
                                }}></i>
                            </span>
                        </li>
                    )
                }

                <li onClick={() => this.setState({adding: true}) }>
                    <span>
                        <i className='settings-list-icon settings-add-icon'></i>
                    </span>
                </li>
            </ul>
            
            <ListSelect 
                visible={this.state.adding} 
                schema={schema}
                categories={this.props.categories}
                HideChoice={() => {
                    this.setState({adding: false});
                }}
                PushToSchema={(value) => {
                    this.setState({adding: false});
                    this.UpdateSchemaState(value);
                }}
            />
        </>
	}
}

export { SettingsList };
