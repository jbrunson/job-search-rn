import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      }
    },
    header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="Settings"
            onPress={() => navigate('settings')}
            color="rgba(0, 122, 255, 1)"
            backgroundColor="rgba(0,0,0,0)" />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
  }

  renderLikedJobs = () => {
    return this.props.likedJobs.map(job => {
      const {
        jobkey, detailWrapper, company, formattedRelativeTime,
        url, longitude, latitude, jobtitle
      } = job;
      const initialRegion = {
        longitude,
        latitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
      };

      return (
        <Card key={jobkey} title={jobtitle}>
          <View style={{height: 200}}>
            <MapView
              style={{flex: 1}}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);