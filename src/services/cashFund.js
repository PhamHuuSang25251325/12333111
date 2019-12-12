import client from '../lib/Client';
import { cashFundPagination, cashFundById } from './graphql/queries/cashFund';
import { cashFundCreateOne, cashFundUpdateById, cashFundRemoveById } from './graphql/mutations/cashFund';

export default {
	fetchcashFund: (page) => {
		return client.query({
			query: cashFundPagination,
			variables: { page }
		}).then(({ data: { cashFundPagination } }) => {
			return cashFundPagination
		});
	},

	getById: (id) => {
		return client.query({
			query: cashFundById,
			variables: { id }
		}).then(({ data: { cashFundById } }) => {
			return cashFundById
		});
	},


	update: (id, data) => {
		return client.mutate({
			mutation: cashFundUpdateById,
			variables: { record: { _id: id, ...data } },
		})
			.then(({ data: { cashFundUpdateById: { recordId, record } } }) => {
				return record;
			});
	},

	insert: (data) => {
		return client.mutate({
			mutation: cashFundCreateOne,
			variables: { record: { ...data } },
		})
			.then(({ data: { cashFundCreateOne } }) => {
				return cashFundCreateOne.record
			});
	},

	remove: (id) => {
		return client.mutate({
			mutation: cashFundRemoveById,
			variables: { id }
		})
			.then(({ data: { cashFundRemoveById } }) => {
				return cashFundRemoveById;
			});
	}
}


