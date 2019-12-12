

const initialState = {
	list : [],
	obj: {},
};

const reducer = (state = initialState, action) => {
	const PREFIX = 'CASHFUND_'
	switch (action.type) {
		case PREFIX + 'LIST':
			return {
				...state,
				list: action.payload.items,
				
			};
		case PREFIX + 'OBJECT':
			return {
				...state,
				obj: action.payload
			};
		case PREFIX + 'UPDATE':
			const { data, id } = action.payload
			return {
				...state,
				list: state.list.map(item => item.id === id ? data : item)
			};
		case PREFIX + 'CREATE':
			return {
				...state,
				list: [...state.list, action.payload]
			};
		case PREFIX + 'DELETE':
			return {
				...state,
				list: state.list.filter(item=>item.id !== action.payload)
			};

		default:
			return state;
	}
}

export default reducer;


