import { SyntheticEvent } from 'react';
import styles from './InputBox.module.css';

interface InputBoxProps {
  onTextChange?: (text: string) => void;
}

const InputBox = ({ onTextChange }: InputBoxProps) => {
  const handleInput = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    onTextChange(target.innerText);
  }

  return (
    <div
      className={styles.body}
      contentEditable
      onInput={handleInput}
    />
  );
};

export default InputBox;
