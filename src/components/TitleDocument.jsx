import { useEffect } from 'react';

const TitleDocument = ({ children }) => {
  useEffect(() => {
    document.title = children;
  }, [children]);
  return null;
};

export default TitleDocument;
