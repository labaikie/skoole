import {connect} from 'react-redux';
import OnboardingView from './OnboardingView';
import {exitOnboarding} from '../session/SessionState';

export default connect(
  state => ({}),
  {exitOnboarding}
)(OnboardingView);
