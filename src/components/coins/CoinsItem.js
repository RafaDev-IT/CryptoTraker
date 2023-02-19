import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import upRowImg from '../../assets/up.png';
import downRowImg from '../../assets/down.png';
import colors from '../../res/colors';
const CoinsItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        {item.percent_change_1h < 0 ? (
          <Image style={styles.imgIcon} source={downRowImg} />
        ) : (
          <Image style={styles.imgIcon} source={upRowImg} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 16,
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  nameText: {
    color: 'white',
    fontSize: 14,
    marginRight: 12,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
  },
  percentText: {
    color: 'white',
    fontSize: 12,
    marginRight: 8,
  },
  imgIcon: {
    width: 24,
    height: 24,
  },
});
export default CoinsItem;
