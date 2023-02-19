import React, {useEffect} from 'react';
import {View, Image, Text, SectionList, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const CoinDetailScreen = props => {
  const {
    route: {
      params: {coin},
    },
    navigation,
  } = props;

  const imageUri = `https://c1.coinlore.com/img/50x50/${coin.nameid}.png`;

  const sections = [
    {
      title: 'Market cap',
      data: [coin.market_cap_usd],
    },
    {
      title: 'Price USD',
      data: [coin.price_usd],
    },
    {
      title: 'Volume 24h',
      data: [coin.volume24],
    },
    {
      title: 'Change 1h',
      data: [coin.percent_change_1h],
    },
    {
      title: 'Change 24h',
      data: [coin.percent_change_24h],
    },
    {
      title: 'Change 7d',
      data: [coin.percent_change_7d],
    },
  ];

  useEffect(() => {
    navigation.setOptions({title: coin.symbol});
  }, [coin.symbol, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image style={styles.iconImg} source={{uri: imageUri}} />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}> {item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImg: {
    width: 50,
    height: 50,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CoinDetailScreen;
