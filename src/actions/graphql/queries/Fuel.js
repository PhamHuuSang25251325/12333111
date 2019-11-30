import gql from 'graphql-tag';
import {pageFields} from './PageInfo';
import {unitFields} from './Unit';
import {fuelTypeFields} from './FuelType';

const fuelFields = gql`
  fragment fuelFields on Fuel {
    id
    name
    canAssignColumn
    hasColumn
    columns {
      name
      description
      meters
      taxMeter
      status
      id
    }
    unit {
      ...unitFields
    }
    unitConvert {
      id
      name
    }
    units {
      ...unitFields
    }
    priceImport {
      id
      created_at
      appliedDate
      price
      type
      unit {
        ...unitFields
      }
    }
    priceExport {
      id
      created_at
      appliedDate
      price
      type
      unit {
        ...unitFields
      }
    }
    type {
      ...fuelTypeFields
    }
    description
    status
  }
  ${unitFields}
  ${fuelTypeFields}
  `;

export const fuelById = gql`
  query fuelById($id: MongoID!) {
    fuelById(_id: $id) {
      ...fuelFields
    }
  }
  ${fuelFields}
`;

export const fuelPagination = gql`
  query fuelPagination(
    $page: Int = 1 
    $perPage: Int = 10 
    $filter: FilterFindManyFuelInput 
    $sort: SortFindManyFuelInput
  ){
    fuelPagination(page: $page perPage: $perPage filter: $filter sort: $sort) {
      items {
        ...fuelFields
      }
      pageInfo {
        ...pageFields
      }
    }
  }
  ${fuelFields}
  ${pageFields}
`;

export const fuelMany = gql`
  query fuelMany {
    fuelMany {
      ...fuelFields
    }
  }
  ${fuelFields}
`;
