import InputBox from '../../components/InputBox/InputBox';
import { useState } from "react";

const Main = () => {
  const [text, setText] = useState('');
  console.log(text);

  return <InputBox onTextChange={setText}/>;
};

export default Main;
