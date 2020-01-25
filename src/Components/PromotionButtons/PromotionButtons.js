import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { youthBelts, adultBelts } from '../../data/beltTypes';

const PromotionButtons = ({ setPromotionType, promotionType }) => {
  const stripeSelected = promotionType === 'stripe';
  const beltSelected = promotionType === 'belt';

  const toggleStripePromotion = () => {
    setPromotionType(stripeSelected ? null : 'stripe');
  }

  const toggleBeltPromotion = () => {
    setPromotionType(beltSelected ? null : 'belt')
  }
  // const colorOptions = studentAge < 12 ? youthBelts : adultBelts;
  // const indexOfCurrentColor = studentAge < 12 ? youthBelts.indexOf(color) : adultBelts.indexOf(color);
  // const colorToPromoteTo = colorOptions[indexOfCurrentColor + 1] ? colorOptions[indexOfCurrentColor + 1].toLowerCase() : 'black';
  
  return (
    <View style={{ ...styles.container }}>

      <TouchableOpacity
        disabled={beltSelected}
        onPress={toggleStripePromotion}
        style={{ ...styles.stripeButton, 
          borderColor: stripeSelected ? 'gold' : 'black', 
          backgroundColor: stripeSelected ? 'black' : 'white'
        }}
        >
        <MaterialCommunityIcons name='reorder-vertical' color={stripeSelected ? 'gold' : 'black'} size={45} style={{ alignSelf: 'center', top: 2 }}/>
      </TouchableOpacity>

      <TouchableOpacity 
        disabled={stripeSelected}
        onPress={toggleBeltPromotion}
        style={{ ...styles.promoteBeltButton, 
          borderColor: beltSelected ? 'gold' : 'black', 
          backgroundColor: beltSelected ? 'black' : 'white'
        }}
      >
       <MaterialCommunityIcons name='trophy-outline' color={beltSelected ? 'gold' : 'black'} size={40} style={{ alignSelf: 'center', top: 8 }}/>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 300,
    height: 70,
    marginTop: 10
  },
  stripeButton: { 
    borderWidth: 4, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    top: 5 
  },
  promoteBeltButton: {
    width: 60, 
    height: 60, 
    borderWidth: 4, 
    borderRadius: 30, 
    alignSelf: 'center'
  }
});

export default PromotionButtons;
