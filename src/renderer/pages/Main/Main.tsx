import InputBox from '../../components/InputBox/InputBox';
import { useEffect, useState } from 'react';

const Main = () => {
  useEffect(() => {
    window.electronAPI.handleFileOpen((_, value) => {
      setText(new TextDecoder().decode(value));
    });
  }, []);

  const [text, setText] = useState('');

  return <InputBox onTextChange={setText} text={text} />;
};

export default Main;
