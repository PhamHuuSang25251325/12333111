import gql from 'graphql-tag';

export const unitFields = gql`
  fragment unitFields on Unit {
    id
    name
    multiplier
    label
    description
    unitConvert {
      name
      label
    }
  }
`;

export const unitMany = gql`
  query unitMany{
    unitMany {
      ...unitFields
      unitConvert {
        ...unitFields
      }
    }
  }
`;

