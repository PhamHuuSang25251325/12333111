import client from '../lib/Client';
import { pricePagination, priceById } from './graphql/queries/priceUnit';
import { priceUpdateById, priceCreateOne, priceRemoveById } from './graphql/mutations/priceUnit';

export default {
	fetchPriceUnit: (type="import") => {
		return client.query({
			query: pricePagination,
			variables: { filter: { type: type } }
		}).then(({ data: { pricePagination } }) => {
			return pricePagination
		});
	},

	getById: (id) => {
		return client.query({
			query: priceById,
			variables: { id }
		}).then(({ data: { priceById } }) => {
			return priceById
		});
	},


	update: (id, data) => {
		return client.mutate({
			mutation: priceUpdateById,
			variables: { record: { _id: id, ...data } },
		})
			.then(({ data: { priceUpdateById: { recordId, record } } }) => {
				return record;
			});
	},

	insert: (data) => {
		return client.mutate({
			mutation: priceCreateOne,
			variables: { record: { ...data } },
		})
			.then(({ data: { priceCreateOne } }) => {
				return priceCreateOne.record
			});
	},

	remove: (id) => {
		return client.mutate({
			mutation: priceRemoveById,
			variables: { id }
		})
			.then(({ data: { priceRemoveById } }) => {
				return priceRemoveById;
			});
	}
}


