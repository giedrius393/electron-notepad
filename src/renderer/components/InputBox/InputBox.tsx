import { useMemo } from 'react';
import styles from './InputBox.module.css';

interface InputBoxProps {
  onTextChange?: (text: string) => void;
  text: string;
}

const InputBox = ({ onTextChange, text }: InputBoxProps) => {
  const numberOfLines = useMemo(() => text.split('\n').length, [text]);

  return (
    <div className={styles.body}>
      <div className={styles.lineNumbers}>
        {Array(numberOfLines)
          .fill(0)
          .map((_, index) => (
            <span key={`${index}_number`}>{index + 1}</span>
          ))}
      </div>
      <textarea
        className={styles.editable}
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
