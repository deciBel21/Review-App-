import React from 'react';
import { StyleSheet, Button, TextInput, View, Text  } from 'react-native';
import { globalStyles } from './styles/glogabStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = yup.object({
    title: yup.string()
            .required()
            .min(4),
    body: yup.string()
            .required()
            .min(8),
    rating: yup.string()
                .required()
                .test('is-nim-1-5', 'Rating must 1-5', (val) => {
                    return parseInt(val) < 6 && parseInt(val) > 0;
                })        
})

export default function ReviewForm({ addReview }){
    return(
       <View style={globalStyles.container}>
       <Formik
       initialValues={{title:'',body:'',rating:''}}
       validationSchema={ReviewSchema}
       onSubmit={(values, actions) => {
        actions.resetForm();
         addReview(values);
       }}
       >
       {(props) => (
           <View>
                <TextInput 
                    style={globalStyles.input}
                    placeholder='Review Title'
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                   
                />
                <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                <TextInput 
                    multiline  minHeight={60}
                    style={globalStyles.input}
                    placeholder='Review Body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    
                 />
                 <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                 <TextInput 
                    multiline 
                    style={globalStyles.input}
                    placeholder='Review Rating'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                   
                />
                <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <FlatButton text='submit' onPress={props.handleSubmit}/>
           </View>
       )}
       </Formik>
       </View>
    )
}