import React, {Component, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  Text,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';
import gql from 'graphql-tag';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { Query, Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { priceById } from '../../actions/graphql/queries/PriceUnit';
import {CurrencyFormat, DateTimeFormat } from '../../lib/Helper';
import {priceUpdateById } from '../../actions/graphql/mutations/PriceUnit';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export default () => {
  const item = useNavigationParam('item');

  const [isSubmitting, setSubmitting] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState('date');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(item.appliedDate);
  // const { navigation } = this.props;
  
  /* const { loading, error, data } = useQuery(priceById, {
    variables: {id: item.id}
  }); */
  const [updatePriceUnit, { loading, error, data }] = useMutation(priceUpdateById);

  const setDate = (event, date) => {
    date = date || currentDate;
    console.log({ date: DateTimeFormat(date) })
    // setShowDatePicker(Platform.OS === 'ios' ? true : false)
    // 
    // values.appliedDate = moment(date);
    // setFieldValue('appliedDate', date);
    if (datePickerMode === 'date') {
      setDatePickerMode('time');
      // setShowDatePicker(false);
    } else {
      setShowDatePicker(false);
      setDatePickerMode('date');
    }
    setCurrentDate(date);
  }

  return (
    <ScrollView style={styles.container}>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: '',
          appliedDate: moment(currentDate).toDate(),
        }}
        onSubmit={(values, { ...tmpObj }) => {
          console.log({ tmpObj });
        console.log('onSubmit', values);
          updatePriceUnit({
            variables: { record: values }
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue  }) => (
        <View>
            <Text>Thời điểm áp dụng</Text>
            <Button onPress={() => setShowDatePicker(true)} title={DateTimeFormat(currentDate)} />
            {showDatePicker &&
              <DateTimePicker
              mode={datePickerMode}
              value={new Date(currentDate)}
              is24Hour={true}
              onChange={setDate}
              />
            }
          <Text>Title</Text>
            <TextInput
               style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
            {errors.email && touched.email ? (
            <Text>{errors.email}</Text>
          ) : null}
          <Button style={styles.submitBtn} onPress={handleSubmit} title="Submit" /> 
        </View>
      )}
      </Formik>
    </ScrollView>
  );
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
    borderBottomColor: '#CCCCCC',
    borderColor: 'gray',
    borderWidth: 1
  },
  submitBtn: {
    marginTop: 20,
  }
});
