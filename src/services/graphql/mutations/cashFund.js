import gql from 'graphql-tag';

export const cashFundCreateOne = gql`
    mutation cashFundCreateOne(
        $record: CreateOneCashFundInput!
    ) {
        cashFundCreateOne(
        record: $record
        ) {
        recordId
        record {
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
    }
`;

export const cashFundUpdateById = gql`
    mutation cashFundUpdateById ($record: UpdateByIdCashFundInput!) {
        cashFundUpdateById(record: $record) {
        recordId
        record {
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
    }
`;

export const cashFundRemoveById = gql`
    mutation cashFundRemoveById ($id: MongoID!) {
        cashFundRemoveById(_id: $id) {
        recordId
        record {
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
    }
`;