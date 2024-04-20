import React from 'react';

function Editor({ content, onChange }) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        value={content}
        onChange={onChange}
        placeholder="Enter your README content..."
        rows={10}
        cols={50}
      />
    </div>
  );
}

export default Editor;
