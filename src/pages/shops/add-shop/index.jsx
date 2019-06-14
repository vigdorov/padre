import React from 'react';

import TopPanel from "../../../components/top-panel";
import LinkButton from '../../../components/link-button';
import ShowTopPanel from '../../../components/shop-top-panel';

export default class AddShop extends React.Component {
  constructor (props) {
    super( props );

    this.state = {
      id: '',
      address: '',
      to: ''
    }
  }

  handleChange = e => {
    let { id, value } = e.target;

    this.setState({
      [id]: value
    });
  };

  handleClickAdd = () => {
    let { onAdd } = this.props;

    onAdd({ ...this.state });
  };

  render () {

    return (
      <React.Fragment>
        <TopPanel header="Добавить магазин"
                  subtitle="Заполните форму"
                  right={
                    <LinkButton to='../shops/'
                                onClick={this.handleClickAdd}>
                      Добавить
                    </LinkButton>
                  }
                  left={<LinkButton to='../shops/'>Отмена</LinkButton>}
        />
        <ShowTopPanel onChange={this.handleChange} {...this.state}/>
      </React.Fragment>
    );
  }
}