import gql from 'graphql-tag';

export const cashFundPagination = gql`
    query cashFundPagination($page: Int $perPage: Int $filter: FilterFindManyCashFundInput $sort: SortFindManyCashFundInput){
        cashFundPagination(page: $page perPage: $perPage filter: $filter sort: $sort) {
            items {
                id
                carryingDate
                voucherDate
                income
                outcome
                left
                leftFinal
                reason
                note
                isApproved
            }
            pageInfo {
                currentPage
                perPage
                pageCount
                itemCount
            }
        }
    }
`;

export const cashFundById = gql`
    query cashFundById($id: MongoID!) {
        cashFundById (_id: $id) {
            id
            carryingDate
            voucherDate
            income
            outcome
            left
            leftFinal
            reason
            note
            isApproved
        }
    }
`;