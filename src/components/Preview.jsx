import React from 'react';
import ReactMarkdown from 'react-markdown'; // Import react-markdown instead of marked

function Preview({ content }) {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="preview">
        <ReactMarkdown>{content}</ReactMarkdown> {/* Render Markdown content */}
      </div>
    </div>
  );
}

export default Preview;
