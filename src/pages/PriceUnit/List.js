import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  WebView,
  ActivityIndicator,
  Button,
  ScrollView,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {ListItem} from 'react-native-elements';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {ApolloProvider} from 'react-apollo';
import {Query} from 'react-apollo';
import HTML from 'react-native-render-html';
import {CurrencyFormat,DateFormat} from '../../lib/Helper';
import PriceUnitQuery from '../../graphql/querys/PriceUnit.gql';

export default class ListScreen extends React.Component {
  // 
  /* static navigationOptions = ({navigation}) => {
    return {
      title: 'Danh sách đơn giá',
      headerRight: (
        <Button
          buttonStyle={{padding: 0, backgroundColor: 'transparent'}}
          icon={{name: 'add-circle', style: {marginRight: 0, fontSize: 28}}}
          onPress={() => {
            navigation.push('AddBook');
          }}
          title="Thêm"
        />
      ),
    };
  }; */

  keyExtractor = (item, index) => index.toString();

  separatorComponent = () => (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
      }}
    />
  );

  renderItem = ({item, index, separators}) => (
    <ListItem
      id={item.id}
      title={index + 1 + '. ' + DateFormat(item.appliedDate)}
      rightTitle={CurrencyFormat(item.price)}
      rightSubtitle={item.unit.name}
      subtitle={item.fuel.name}
      onPress={() => {
        // this.props.navigation.navigate('DetailsPriceUnitScreen', {
        //   id: item.id,
        //   item: item,
        // });
        this.props.navigation.dispatch(NavigationActions.navigate({
          routeName: 'DetailsPriceUnitScreen',
          params: {},
          action: NavigationActions.navigate({ routeName: 'Details', params: { id: item.id, item } }),
        }));
      }}
      chevron
      bottomDivider
    />
  );

  render() {
    const typePrice = this.props.typePrice;

    return (
      <Query query={PriceUnitQuery} variables={{filter: {type: typePrice}}}>
        {({loading, error, data, fetchMore}) => {
          if (loading) return (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
          if (error) {
            return <Text>Error </Text>;
          }

          const {items, pageInfo} = data.pricePagination;

          return (
            <FlatList
              data={items}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.separatorComponent}
              onEndReachedThreshold={1}
              onEndReached={() => {
                fetchMore({
                  variables: {page: pageInfo.currentPage + 1},
                  updateQuery: (
                    previousResult,
                    {fetchMoreResult: {pricePagination: fetchMoreResult}},
                  ) => {
                    const {
                      items: oldItems,
                      pageInfo: oldPageInfo,
                      __typename,
                    } = previousResult.pricePagination;
                    const {
                      items: _items,
                      pageInfo: _pageInfo,
                    } = fetchMoreResult;
                    const newEdges = _items;
                    //                    return { posts: [...previousResult.posts.edges, ...fetchMoreResult.posts.edges] };
                    let result = newEdges.length
                      ? {
                          // Put the new comments at the end of the list and update `pageInfo`
                          // so we have the new `endCursor` and `hasNextPage` values
                          pricePagination: {
                            __typename: __typename,
                            items: [...oldItems, ...newEdges],
                            pageInfo: _pageInfo,
                          },
                        }
                      : previousResult;
                    result.pricePagination.count =
                      result.pricePagination.items.length;
                    return result;
                  },
                });
              }}
            />
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    fontSize: 55
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
