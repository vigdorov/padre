import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TopPanel from "../../../components/top-panel";
import LinkButton from "../../../components/link-button";
import ShowTopPanel from '../../../components/shop-top-panel';
import DeleteShop from "./delete-shop";
import FooterPanel from "../../../components/footer-panel";

export default class EditShop extends Component {
  constructor (props) {
    super( props );
    let { id, address } = props.shop,
        { date: to } = props.shop.tasks.to;


    this.state = {
      id: id,
      address: address,
      to: to
    }
  }

  handleClickEdit = () => {
    let { onEdit } = this.props;
    onEdit({ ...this.state });
  };

  handleChange = (e) => {
    let { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  render () {
    return (
      <React.Fragment>
        <TopPanel header="Изменить магазин"
                  subtitle="Внесите изменения"
                  right={
                    <LinkButton to='../shops/'
                                onClick={this.handleClickEdit}>
                      Изменить
                    </LinkButton>
                  }
                  left={<LinkButton to='../shops/'>Отмена</LinkButton>}
        />
        <ShowTopPanel onChange={this.handleChange} {...this.state}/>

        <FooterPanel>
          <DeleteShop onDelete={this.props.onDelete} />
        </FooterPanel>
      </React.Fragment>
    );
  }
}

EditShop.propTypes = {
  shop: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};