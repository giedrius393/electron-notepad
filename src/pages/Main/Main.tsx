import InputBox from '../../components/InputBox/InputBox';
import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');

  return <InputBox onTextChange={setText} text={text} />;
};

export default Main;
