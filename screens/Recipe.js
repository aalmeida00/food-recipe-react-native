import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';

import { BlurView } from '@react-native-community/blur';

import { FONTS as f, COLORS as c, SIZES as s, icons } from '../constants';

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          height: 40,
          width: 40,
          marginLeft: 20,
        }}
      >
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: c.lightGray2,
            ...f.body4,
          }}
        >
          Receita por:
        </Text>
        <Text
          style={{
            color: c.white2,
            ...f.h3,
          }}
        >
          {selectedRecipe?.author?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: c.lightGreen,
        }}
        onPress={() => console.log('Ver perfil')}
      >
        <Image
          source={icons.rightArrow}
          style={{
            width: 25,
            height: 25,
            tintColor: c.lightGreen1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        style={{
          flex: 1,
          borderRadius: s.radius,
        }}
        blurType="dark"
      >
        <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: s.radius,
          backgroundColor: c.transparentBlack9,
        }}
      >
        <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
      </View>
    );
  }
};

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const ScrollY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  function renderCeipeCardHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: ScrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: ScrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: ScrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.white,
      }}
    >
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{renderCeipeCardHeader()}</View>}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: ScrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: c.lightGray,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  ...f.body3,
                }}
              >
                {item.description}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  ...f.body3,
                }}
              >
                {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
