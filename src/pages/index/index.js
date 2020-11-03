import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import InputWrap from './mods/InputWrap';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <InputWrap />
      </View>
    </View>
  );
};
