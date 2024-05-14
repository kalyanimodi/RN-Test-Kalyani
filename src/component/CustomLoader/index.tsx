import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import styles from './styles';
import {Color} from '../../utils';

interface LoaderProps {
  loading: boolean;
}
const CustomLoader = (props: LoaderProps) => {
  const {loading} = props;

  return (
    <Modal visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={Color.PRIMARY}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoader;
