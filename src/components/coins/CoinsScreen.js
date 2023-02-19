import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {get, post} from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const CoinsScreen = ({navigation}) => {
  [coinsData, setCoinsData] = useState([]);
  [loadingCoins, setLoadingCoins] = useState(false);

  const gettingData = async () => {
    setLoadingCoins(true);
    const coins = await get('https://api.coinlore.net/api/tickers/');
    setCoinsData(coins.data);
    setLoadingCoins(false);
  };
  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin});
  };
  useEffect(() => {
    gettingData();
  }, []);

  return (
    <View style={styles.container}>
      {loadingCoins ? (
        <ActivityIndicator style={styles.loader} size="large" color="black" />
      ) : (
        <FlatList
          data={coinsData}
          renderItem={({item}) => (
            <Pressable onPress={() => handlePress(item)}>
              <CoinsItem item={item} />
            </Pressable>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    // color: '#fff',
    textAlign: 'center',
  },
  loader: {
    top: 300,
  },
});
export default CoinsScreen;
