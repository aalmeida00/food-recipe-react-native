import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';

import {
  FONTS as f,
  COLORS as c,
  SIZES as s,
  icons,
  images,
  dummyData,
} from '../constants';

import { CategoryCard, TrendingCard } from '../components';

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: s.padding,
          alignItems: 'center',
          height: 80,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: c.darkGreen,
              ...f.h2,
            }}
          >
            Olá, André
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: c.gray,
              ...f.body3,
            }}
          >
            O que voce deseja cozinhar hoje?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Perfil')}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: s.padding,
          paddingHorizontal: s.radius,
          borderRadius: 10,
          backgroundColor: c.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: c.gray,
          }}
        />
        <TextInput
          style={{
            marginLeft: s.radius,
            ...f.body3,
          }}
          placeholderTextColor={c.gray}
          placeholder={'Procure por receitas'}
        />
      </View>
    );
  }
  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: s.padding,
          marginHorizontal: s.padding,
          borderRadius: 10,
          backgroundColor: c.lightGreen,
        }}
      >
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.recipe} style={{ width: 80, height: 80 }} />
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: s.radius,
          }}
        >
          <Text
            style={{
              width: '70%',
              ...f.body4,
            }}
          >
            Voce tem 12 receitas que ainda nao foram visitadas
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log('Veja receitas')}
          >
            <Text
              style={{
                color: c.darkGreen,
                textDecorationLine: 'underline',
                ...f.h4,
              }}
            >
              Veja receitas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTendingSection() {
    return (
      <View
        style={{
          marginTop: s.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: s.padding,
            ...f.h2,
          }}
        >
          Receitas do momento
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? s.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate('Recipe', { recipe: item })}
              />
            );
          }}
        ></FlatList>
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: s.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...f.h2,
          }}
        >
          Categorias
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: c.gray,
              ...f.body4,
            }}
          >
            Ver todas
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: c.white,
      }}
    >
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {renderSeeRecipeCard()}
            {renderTendingSection()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: s.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', { recipe: item })}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      ></FlatList>
    </SafeAreaView>
  );
};

export default Home;
