import React, { useState } from 'react';
import { View, Input } from 'remax/wechat';
import styles from './index.css';

export default () => {

  const [value, setValue] = useState('');

  const handleInput = (ev) => {
    console.log(ev);
    setValue(ev.target.value)
  }

  return (
    <View>
      <Input
        className={styles.input}
        onInput={handleInput}
        value={value}
        showConfirmBar={true}
        adjustPosition={true}
        autoFocus={false}
        maxlength={100}
        placeholder={'Maximum length 100 characters...'}
        placeholderClassName={styles.inputPlaceHolder}
        onConfirm={handleInput}
      />
    </View>
  );
}