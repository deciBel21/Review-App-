import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal,
TouchableWithoutFeedback, Keyboard} from 'react-native';
import  {globalStyles}  from './styles/glogabStyles';
import Card from './styles/cards';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';



export default function Home({navigation}){
    const [modalOpen, modalOpenState] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
      const addReview = (review) => {
        review.key=Math.random.toString();
        setReviews((currentReviews) => {
                return [review, ...currentReviews]
        });
        modalOpenState(false);
      }
      
    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons
                name='close'
                size={24}
                style={{...styles.modalToogle,...styles.modalClose}}
                onPress={() => modalOpenState(false)}
            />
                    <ReviewForm  addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
                <MaterialIcons
                    name='add'
                    size={24}
                    style={styles.modalToogle}
                    onPress={() => modalOpenState(true)}
                />
                    <FlatList 
                        data={reviews}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigation.navigate('reviewDetails', item)}>
                            <Card>
                            <Text style={globalStyles.Text}>{item.title}</Text>
                            </Card>
                            </TouchableOpacity>
                        )}
                    />
        </View>
    )
}
const styles=StyleSheet.create({
    modalToogle:{
        marginBottom:10,
        borderWidth:1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    },
    modalContent:{
        flex:1
    }
})