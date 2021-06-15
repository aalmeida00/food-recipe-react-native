import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { FONTS as f, COLORS as c, SIZES as s } from '../constants';

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: s.radius,
        borderColor: c.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: s.radius,
        }}
      />
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...f.h2,
          }}
        >
          {categoryItem.name}
        </Text>
        <Text
          style={{
            color: c.gray,
            ...f.body4,
          }}
        >
          {categoryItem.duration} | {categoryItem.serving} Porções
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
