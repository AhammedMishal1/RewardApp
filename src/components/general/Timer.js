import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Colors, Fonts } from '../../constants';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes, hours]);

  //   restart timer
  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  //   stop timer
  const stop = () => {
    timer && clearInterval(timer);
  };

  return (
    <Text style={styles.time}>
      {hours < 10 ? '0' + hours : hours} :{' '}
      {minutes < 10 ? '0' + minutes : minutes} :{' '}
      {seconds < 10 ? '0' + seconds : seconds}
    </Text>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.BLACK1,
    fontFamily: Fonts.POPPINS_BOLD,
  },
});

export default Timer;
