import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { globalStyles, images} from './styles/glogabStyles';
import Card from './styles/cards';

export default function ReviewDetails({navigation}){
    const rating= navigation.getParam('rating');
    return(
        <View style={styles.container}>
       <Card>
       <Text style={globalStyles.Text}>{navigation.getParam('title')}</Text>
       <Text style={globalStyles.Text}>{navigation.getParam('body')}</Text>
      <View style={styles.rating}>
        <Text>Gamezone Ratings:</Text>
        <Image source={images.ratings[rating]} />
      </View>
       </Card>
        </View>
    )
}
const styles=StyleSheet.create({
container: {
    padding: 24,
},
rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
}
});