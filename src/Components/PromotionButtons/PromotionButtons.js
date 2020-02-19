import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './promotionButtonsStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PromotionButtons = ({ setPromotionType, promotionType }) => {
  const stripeSelected = promotionType === 'stripe';
  const beltSelected = promotionType === 'belt';

  const toggleStripePromotion = () => {
    setPromotionType(stripeSelected ? null : 'stripe');
  }

  const toggleBeltPromotion = () => {
    setPromotionType(beltSelected ? null : 'belt')
  }

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
        <MaterialCommunityIcons 
          name='reorder-vertical' 
          color={stripeSelected ? 'gold' : 'black'} 
          size={45} 
          style={{ alignSelf: 'center', top: 2 }}/>
      </TouchableOpacity>

      <TouchableOpacity 
        disabled={stripeSelected}
        onPress={toggleBeltPromotion}
        style={{ ...styles.promoteBeltButton, 
          borderColor: beltSelected ? 'gold' : 'black', 
          backgroundColor: beltSelected ? 'black' : 'white'
        }}
      >
       <MaterialCommunityIcons 
        name='trophy-outline' 
        color={beltSelected ? 'gold' : 'black'} 
        size={40} 
        style={{ alignSelf: 'center', top: 8 }}/>
      </TouchableOpacity>

    </View>
  );
};

export default PromotionButtons;
