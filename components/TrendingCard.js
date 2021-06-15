import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';

import { BlurView } from '@react-native-community/blur';
import { FONTS as f, COLORS as c, SIZES as s, icons } from '../constants';

const RecipeCardDetails = ({ recipeItem }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            width: '70%',
            color: c.white,
            ...f.h3,
            fontSize: 18,
          }}
        >
          {recipeItem.name}
        </Text>

        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 20,
            height: 20,
            marginRight: s.base,
            tintColor: c.darkGreen,
          }}
        />
      </View>
      <Text
        style={{
          color: c.lightGray,
          ...f.body4,
        }}
      >
        {recipeItem.duration} | {recipeItem.serving} porções
      </Text>
    </View>
  );
};

const RecipeCardInfo = ({ recipeItem }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView blurType="dark" style={styles.recipeCardContainer}>
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          ...styles.recipeCardContainer,
          backgroundColor: c.transparentDarkGray,
        }}
      >
        <RecipeCardDetails recipeItem={recipeItem} />
      </View>
    );
  }
};

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: s.radius,
        marginRight: 20,
        borderRadius: s.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: s.radius,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: s.radius,
          paddingVertical: 5,
          backgroundColor: c.transparentGray,
          borderRadius: s.radius,
        }}
      >
        <Text
          style={{
            color: c.white,
            ...f.h4,
          }}
        >
          {recipeItem.category}
        </Text>
      </View>

      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: s.radius,
    paddingHorizontal: s.base,
    borderRadius: s.radius,
  },
});

export default TrendingCard;
