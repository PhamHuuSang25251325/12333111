import gql from 'graphql-tag';

export const priceUnitFields = gql`
  fragment priceUnitFields on Price {
    id
    created_at
    appliedDate
    fuel {id name}
    unit {id name}
    price
    type
    isApproved
  }
`;

export const priceById = gql`
  query priceById($id: MongoID!){
    priceById(_id: $id) {
      ...priceUnitFields
    }
  }
  ${priceUnitFields}
`;

export const pricePagination = gql`
  query pricePagination (
    $page: Int = 1 
    $perPage: Int = 10 
    $filter: FilterFindManyPriceInput
    $sort: SortFindManyPriceInput
  ) {
    pricePagination(perPage: $perPage page: $page filter: $filter sort:$sort) {
      count
      items {
        ...priceUnitFields
      }
      pageInfo {
        currentPage
        perPage
        pageCount
        itemCount
      }
    }
  }
  ${priceUnitFields}
`;
