import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          title="Move on"
          onPress={this.props.onComplete}
          raised />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          key={slide.text}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{flex: 1}}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    color: 'white',
    fontSize: 30
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;
