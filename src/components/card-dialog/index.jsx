import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

export default class CardDialog extends React.Component {
  render () {
    let { icons, colors, func } = this.props.data;

    let buttons = icons.map( (icon, i) => {
      let color = colors[i],
          onClick = func[i];

      return (
        <button className={"card-dialog__button " + color}
                onClick={onClick}
        >
          <span className="card-dialog__title">
            { icon }
          </span>
        </button>
      );
    });

    return (
      <div className="card-dialog">
        { buttons }
      </div>
    );
  }
}

CardDialog.propsTypes = {
  data: {
    icons: PropTypes.array,
    colors: PropTypes.array,
    func: PropTypes.array
  }
};
