import React from 'react';
import { View, Text, Image } from 'react-native';

import { FONTS as f, COLORS as c } from '../constants';

const Viewers = ({ viewersList }) => {
  if (viewersList?.length == 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: c.lightGray2,
            ...f.body4,
          }}
        >
          Seja o primeiro a tentar
        </Text>
      </View>
    );
  } else if (viewersList?.length <= 4) {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => (
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: (index = -0 ? 0 : -20),
              }}
            >
              <Image
                source={item.profilePic}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          ))}
        </View>

        <Text
          style={{
            color: c.lightGray2,
            textAlign: 'right',
            ...f.body4,
            lineHeight: 18,
          }}
        >
          {viewersList?.length} pessoas
        </Text>
        <Text
          style={{
            color: c.lightGray2,
            textAlign: 'right',
            ...f.body4,
            lineHeight: 18,
          }}
        >
          Já tentaram
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: index == 0 ? 0 : -20,
                  }}
                >
                  <Image
                    source={item.profilePic}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                  />
                </View>
              );
            }
            if (index == 3) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: -20,
                    borderRadius: 25,
                    backgroundColor: c.darkGreen,
                  }}
                >
                  <Text
                    style={{
                      color: c.white,
                      ...f.body4,
                    }}
                  >
                    {viewersList?.length - 3}+
                  </Text>
                </View>
              );
            }
          })}
        </View>
        <Text
          style={{
            color: c.lightGray2,
            textAlign: 'right',
            ...f.body4,
            lineHeight: 18,
          }}
        >
          {viewersList?.length} pessoas
        </Text>
        <Text
          style={{
            color: c.lightGray2,
            textAlign: 'right',
            ...f.body4,
            lineHeight: 18,
          }}
        >
          Já tentaram
        </Text>
      </View>
    );
  }
};

export default Viewers;
