import React from 'react';

import { DeleteForever } from "@material-ui/icons";

import LinkButton from "../../../components/link-button";
import './style.scss';

export default class DeleteShop extends React.Component {
  render () {
    return (
      <LinkButton to="../shops"
                  className="delete-shop"
                  onClick={this.props.onDelete}>
        <DeleteForever />
        <span>Удалить</span>
      </LinkButton>
    );
  }
}