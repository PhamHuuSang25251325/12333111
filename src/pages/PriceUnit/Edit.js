import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  // TextInput,
  Text,
  Picker,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Appbar } from 'react-native-paper';
import { graphql } from 'react-apollo';
import { update } from '../../actions/PriceUnit';
import {CurrencyFormat, DateTimeFormat } from '../../lib/Helper';
import {priceUpdateById } from '../../actions/graphql/mutations/PriceUnit';
import {fuelMany } from '../../actions/graphql/queries/Fuel';
import {unitMany } from '../../actions/graphql/queries/Unit';

class EditPriceUnit extends Component {
  constructor(props) {
    super(props);

    const { fuelMany: { data: fuels = [] }, unitMany: { data: units = [] } } = this.props;

    this.item = props.navigation.getParam('item');
    this.state = {
      item: this.item,
      appliedDate: this.item.appliedDate,
      mode: 'date',
      showDatePicker: false,
      fuels,
      units,
    };
  }
  static navigationOptions = {
    title: 'Edit Book',
  };

  save = (values) => {
    console.log('before save:',values)
    update(values).then(data => {
      console.log({data})
    }).catch(err => {
      console.log('catch 2', err.message)
    })
  }

  updateTextInput = (text, field) => {
    const state = this.state;
    state[field] = text;
    this.setState(state);
  };

  showDatePicker = () => {
    this.setState({
      showDatePicker: true,
      mode: 'date',
    });
  }
  setDate = (event, date) => {
    date = date || this.state.appliedDate;
    console.log({ date: DateTimeFormat(date) })
    // setShowDatePicker(Platform.OS === 'ios' ? true : false)
    // 
    // values.appliedDate = moment(date);
    // setFieldValue('appliedDate', date);
    if (this.state.mode === 'date') {
      this.setState({
        showDatePicker: true,
        mode: 'time',
        appliedDate: date,
      });
      // setShowDatePicker(false);
    } else {
      this.setState({
        showDatePicker: false,
        mode: 'date',
        appliedDate: date,
      });
    }
    // setCurrentDate(date);
  }

  render() {
    const { navigation } = this.props;

    const {
      showDatePicker,
      appliedDate,
      mode,
      description,
      published_year,
      publisher,
    } = this.state;
    return (
      <ScrollView style={styles.container}>
      <Formik
        // validationSchema={SignupSchema}
        initialValues={this.state.item}
        onSubmit={(values) => {this.save(values)}}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue  }) => (
        <View>
            <Text>Thời điểm áp dụng</Text>
            <Button onPress={this.showDatePicker} title={DateTimeFormat(appliedDate)} />
            {showDatePicker &&
              <DateTimePicker
              mode={mode}
              value={new Date(appliedDate)}
              is24Hour={true}
              onChange={this.setDate}
              />
            }

            <TextInput
               style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            label="Giá nhà nước"
            placeholder="VNĐ"
            />
            {errors.email && touched.email ? (
            <Text>{errors.email}</Text>
              ) : null}

            <Picker
            // selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            // onValueChange={(itemValue, itemIndex) =>
            //   this.setState({language: itemValue})
            //     }
              >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          
          <Button style={styles.submitBtn} onPress={handleSubmit} title="Submit"/> 
        </View>
      )}
      </Formik>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    margin: 5,
  },
});

export default graphql(fuelMany, { name: 'fuelMany' })(
  graphql(unitMany, { name: 'unitMany' })(EditPriceUnit)
);
