import React from 'react';
import TopPanel from "../../components/top-panel";
import CardTO from './card-to';
import dateWorker from "../../functions/date-worker";

export default class TechnicalService extends React.Component {
  constructor (props) {
    super( props );

    this.state = {
      editIndex: 0,
    };
  }

  handleClickTO = (i) => {
    this.setState({ editIndex: i });
  };

  render () {
    let { shops } = this.props;

    // Сортируем массив магазинов согласно датам ТО по возрастанию
    let regulatedShops = shops.slice();
    regulatedShops.sort( (firstShop, secondShop) => {
      let firstDate = dateWorker.parseDate(firstShop.tasks.to.date),
          secondDate = dateWorker.parseDate(secondShop.tasks.to.date);
      return firstDate - secondDate;
    });

    let CardsTO = regulatedShops.map( (shop, i) => {
      let isEdit = i === this.state.editIndex;
      return (
        <CardTO shop={shop}
                edit={isEdit}
                key={i}
                onClick={() => this.handleClickTO(i)}
        />
      );
    });


    return (
      <div>
        <TopPanel header="ТО"
                  subtitle="Список планового обслуживания"
        />
        { CardsTO }
      </div>
    );
  }
}