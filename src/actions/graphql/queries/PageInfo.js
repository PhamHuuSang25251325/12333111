import gql from 'graphql-tag';

export const pageFields = gql`
  fragment pageFields on Pagination {
    pageSize currentPage totalPage totalItem
  }
`;
