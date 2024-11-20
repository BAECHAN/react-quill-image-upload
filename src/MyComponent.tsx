import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; //import해오기2
import ReactQuillEditor from './ReactQuillEditor';

const MyComponent = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (value: string) => {
    setContent(value); // 상태 업데이트
  };

  return (
    <ReactQuillEditor
      value={content}
      onChange={handleEditorChange}
      style={{ width: '100%', height: '80%' }}
    />
  );
};

export default MyComponent;
