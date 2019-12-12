import gql from 'graphql-tag';

export const priceCreateOne = gql`
mutation priceCreateOne($record: CreateOnePriceInput!) {
  priceCreateOne (record: $record) {
    recordId
    record {
      id
      created_at
      appliedDate
      fuel {id name}
      unit {id name}
      price
      type
      isApproved
    }
  }
}
`;

export const priceUpdateById = gql`
mutation priceUpdateById ($record: UpdateByIdPriceInput!) {
  priceUpdateById(record: $record) {
    recordId
    record {
      id
      created_at
      appliedDate
      fuel {id name}
      unit {id name}
      price
      type
      isApproved
    }
  }
}
`;


export const priceRemoveById = gql`
mutation priceRemoveById($id: MongoID!) {
  priceRemoveById (_id: $id) {
    recordId
  }
}
`;

