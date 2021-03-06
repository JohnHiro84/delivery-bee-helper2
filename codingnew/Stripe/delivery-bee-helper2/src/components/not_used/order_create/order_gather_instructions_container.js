// src/components/tweets/tweet_compose_container.js

import { connect } from 'react-redux';
import {updateStateNewOrder} from "../../actions/order_actions";
import OrderGatherInstructions from './order_gather_instructions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newEvent: state.events.new,
    newOrder: state.orders.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStateNewOrder: data => dispatch(updateStateNewOrder(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderGatherInstructions);
