import { Layout, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NextButton from '../../assets/button/button.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface OnboardingProps {}

export const OnboardingScreen = (props: OnboardingProps) => {
  const navigation = useNavigation();

  return (
    <Layout style={styles.mainContainer} key="1">
      {/* FIRST SECTION */}
      <Layout style={styles.headerContainer}>
        <Layout style={styles.layout} level="1">
          <View style={styles.ball} />
          <View style={styles.textContent}>
            <Text style={styles.text} category="h1">
              The
            </Text>
            <Text style={styles.text} category="h1">
              Vocabulary Builder
            </Text>
            <Text
              style={{
                ...styles.text,
                fontSize: 24,
              }}
              category="p1">
              Designed for learners.
            </Text>
          </View>
        </Layout>
      </Layout>

      {/* SECOND SECTION */}
      <Layout style={styles.contentContainer}>
        <Layout style={styles.pagePosition} level="1">
          <View style={styles.redCircle} />
          <View style={styles.blackCircle} />
        </Layout>

        <Layout style={styles.layout} level="1">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Onboarding2');
            }}>
            <Image source={NextButton} width={50} height={50} />
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  text: {
    margin: 2,
    fontFamily: 'Montserrat-Regular',
  },
  textContent: {
    alignItems: 'flex-start',
    marginTop: 35,
  },
  ball: {
    height: 300,
    width: 300,
    borderRadius: 200,
    backgroundColor: '#F95A2C',
  },
  pagePosition: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackCircle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  redCircle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: '#F95A2C',
    marginHorizontal: 5,
  },
});
