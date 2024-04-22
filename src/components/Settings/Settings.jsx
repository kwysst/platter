import React from 'react';
import SettingsList from './SettingsList'
import Buttons from './Buttons'
import Select from './Select';
import '../../styles/settings/settings.css';

export default class Settings extends React.Component {

	constructor(props) {
        super(props);

        let schema = this.props.LocalDB.GetSchema();
			
		this.state = { adding: false, schema: schema };
    }

    // setState & save in localStorage
	UpdateSchemaState(value) {
		this.setState({ schema: value });
		this.props.LocalDB.SetSchema(value);
	}
	ShowSelect() {
		this.setState({ adding: true });
	}

	render() {
		const categories = this.props.DishGetter.GetCategories();
		const schema = this.props.LocalDB.GetSchema();

		return <div className='settings-wrap'>
			<span className='settings-name'>Настройки</span>

			<SettingsList 
				schema={schema}
				UpdateSchemaState={ (value) => this.UpdateSchemaState(value) }/>

			{/* <SettingsInline /> */}

			<Buttons ShowSelect={() => this.ShowSelect() }/>


			<Select 
                visible={this.state.adding}
                categories={categories}
                HideChoice={() => {
                    this.setState({adding: false});
                }}
                PushToSchema={(value) => {
					schema.push(value);
                    this.setState({adding: false});
                    this.UpdateSchemaState(schema);
                }}
            />
		</div>
	}
}