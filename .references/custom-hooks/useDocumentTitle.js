import { useLayoutEffect } from 'react';

export const useDocumentTitle = (titleContent) => {
  useLayoutEffect(() => {
    document.title = titleContent;
  }, [titleContent]);
};