import React, {PropTypes, Component} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import NavigationViewContainer from './navigation/NavigationViewContainer'
import OnboardingViewContainer from './onboarding/OnboardingViewContainer'
import * as snapshotUtil from '../utils/snapshot'
import * as SessionStateActions from '../modules/session/SessionState'
import store from '../redux/store'
import DeveloperMenu from '../components/DeveloperMenu'

class AppView extends Component {

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    const {isReady, onboarding } = this.props
    if (!isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered}/>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        {onboarding
          ? <OnboardingViewContainer />
          : <NavigationViewContainer />}
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }

};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
