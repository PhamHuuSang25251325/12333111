import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { priceUpdateById, priceCreateOne } from '../actions/graphql/mutations/PriceUnit';
import EditComponent from '../pages/PriceUnit/Edit';

const gContainer = graphql(priceCreateOne, { name: 'priceCreateOne' })(
		graphql(priceUpdateById, { name: 'priceUpdateById' })(EditComponent)
	);

const mapStateToProps = (state) => {
  console.log({state})
  return {
    imageSelected: 'state.Media.selected',
  };
};

export default connect(mapStateToProps)(gContainer);
// export default connect(mapStateToProps)(EditComponent);
