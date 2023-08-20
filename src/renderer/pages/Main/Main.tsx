import InputBox from '../../components/InputBox/InputBox';
import { useEffect, useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    window.electronAPI.handleFileOpen((_, file) => {
      setText(new TextDecoder().decode(file.content));
      setCurrentPath(file.path);
    });
  }, []);

  useEffect(() => {
    const onFileSave = () => {
      if (currentPath) {
        window.electronAPI.saveExistingFile({
          content: text,
          path: currentPath,
        });
      } else {
        window.electronAPI.saveNewFile(text);
      }
    };

    window.electronAPI.handleFileSave(onFileSave);

    return () => {
      window.electronAPI.removeFileSaveHandler();
    };
  }, [currentPath, text]);

  return <InputBox onTextChange={setText} text={text} />;
};

export default Main;
