// App.js
import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Header from './components/Header';
import MarkdownTools from './components/MarkdownTools';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleComponentClick = (markdown) => {
    setContent(content +"\n"+ markdown);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <MarkdownTools onComponentClick={handleComponentClick} />
        <div className="editor-preview-container">
          <Editor content={content} onChange={handleInputChange} />
          <Preview content={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
