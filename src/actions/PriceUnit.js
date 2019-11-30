// import client from '../lib/Client';
// import { pricePagination, priceById } from '../actions/graphql/queries/PriceUnit';
// import { priceUpdateById, priceCreateOne } from '../actions/graphql/mutations/PriceUnit';

// export function fetchPriceUnit() {
// 	return (dispatch, getState) => {
// 		const state = getState();
// 		// dispatch({ type: 'FETCH_PRICEUNIT' });
// 		client.query({
// 			query: pricePagination,
//       variables: { filter: { type: state.Filter.limit } },
//     }).then((resp) => {
//       console.log({resp})
// 			if (resp.data) {
// 				dispatch({ type: 'FETCH_PRICEUNIT_LIST', payload: resp.data });
// 			}
// 		});

// 		/* client.subscribe({
// 			query: subscribeToNewAd,
// 			onError: (err) => console.error(err),
// 			}).subscribe({
// 				next(data) {
// 					if (data && data.Ad.mutation === 'CREATED') {
// 						dispatch({ type: 'FETCH_NEWADS_FULFILLED', payload: data.Ad.node });
// 					}
// 				},
// 				error(error) {
// 					console.error('Subscription callback with error: ', error);
// 				},
// 		}); */
		
// 	};
// }

// export function update(id, data) {
//   return client.mutate({
//     mutation: priceUpdateById,
//     variables: { record: { _id: id, ...data } },
//   })
//   .then(({ data: { priceUpdateById: { recordId, record } } }) => {
//     return record;
//   });
// }

// export function insert(data) {
//   return client.mutate({
//     mutation: priceCreateOne,
//     variables: { record: { ...data } },
//   });
// }

const PREFIX = 'PRICEUNIT_';

export const fetchPriceUnits = (data)=>({
	type : PREFIX + 'LIST',
	payload : data
})

export const priceUnitObj = (data)=>({
	type : PREFIX + 'OBJECT',
	payload : data
})

export const updatePriceUnit = (data,id)=>({
	type : PREFIX + 'UPDATE',
	payload : {
		data,
		id
	}
})

export const createPriceUnit = (data)=>({
	type : PREFIX + 'CREATE',
	payload : data
})

export const deletePriceUnit = (data)=>({
	type : PREFIX + 'DELETE',
	payload : data
})

