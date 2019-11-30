import gql from 'graphql-tag';

export const fuelTypeFields = gql`
  fragment fuelTypeFields on FuelType {
    id
    name
    canAssignColumn
    status
    description
    code
    type
  }
`;

export const fuelTypeMany = gql`
  query fuelTypeMany{
    fuelTypeMany {
      ...fuelTypeFields
    }
  }
  ${fuelTypeFields}
`;

