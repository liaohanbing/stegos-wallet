// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import Button from './common/Button/Button';
import Checkbox from './common/Checkbox/Checkbox';
import Header from './common/Header/Header';
import styles from './BugsAndTerms.css';
import Icon from './common/Icon/Icon';
import ProgressBar from './common/ProgressBar/ProgressBar';
import Wizard from './common/Wizard/Wizard';

type Props = {
  setBugsAndTerms: boolean => void
};

export default class BagsAndTerms extends Component<Props> {
  props: Props;

  state = {
    isSentBugs: false,
    isTermsAccepted: false
  };

  onNext = () => {
    const { setBugsAndTerms } = this.props;
    const { isSentBugs } = this.state;
    setBugsAndTerms(isSentBugs);
  };

  async onTermsAccepted(accepted: boolean) {
    await this.setState({
      isTermsAccepted: accepted
    });
  }

  async onSendBugsChanged(send: boolean) {
    await this.setState({
      isSentBugs: send
    });
  }

  render() {
    const { isSentBugs, isTermsAccepted } = this.state;
    return (
      <div className={styles.Wrapper}>
        <Header
          logoContainerClassName={styles.HeaderContentWrapper}
          contentContainerClassName={styles.HeaderContentWrapper}
        >
          <div data-tid="backButton">
            <Link to={routes.WELCOME}>
              <Icon name="arrow_back" size={48} />
            </Link>
          </div>
        </Header>
        <Wizard
          steps={[
            {
              number: 1,
              label: 'Password protection',
              active: true
            },
            {
              number: 2,
              label: 'Sync',
              active: true
            },
            {
              number: 3,
              label: 'Bugs & Terms of Use',
              active: true
            }
          ]}
        />
        <div className={styles.Main}>
          <span className={styles.Title}>Bugs and Terms of Use</span>
          <span className={styles.Label}>
            Share anonymized data to help improve Stegos Wallet
          </span>
          <div className={styles.ProgressBarWrapper}>
            <span className={styles.Progress}>100%</span>
            <ProgressBar progress={100} className={styles.ProgressBar} />
          </div>
          <div className={styles.Checkboxes}>
            <div className={styles.CheckboxWrapper}>
              <Checkbox
                value={isSentBugs}
                onClick={this.onSendBugsChanged.bind(this)}
              />
              <span className={styles.CheckboxLabel}>
                Automatically send reports to help Stegos fix bugs
              </span>
            </div>
            <div className={styles.CheckboxWrapper}>
              <Checkbox
                value={isTermsAccepted}
                onClick={this.onTermsAccepted.bind(this)}
              />
              <span className={styles.CheckboxLabel}>
                By continuing, you acknowledge that you have read and agree to
                the Terms of Use and Privacy Policy.
              </span>
            </div>
          </div>
          <div className={styles.FooterWrapper}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 1 }} />
            <div className={styles.ButtonWrapper}>
              <Button
                type="button"
                onClick={this.onNext}
                disabled={!isTermsAccepted}
                iconRight="keyboard_backspace"
                iconRightMirrorHor
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
