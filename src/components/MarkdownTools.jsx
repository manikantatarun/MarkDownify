// MarkdownTools.js
import React, { useState } from 'react';
import '../assets/css/MarkdownTools.css'; // Import CSS for MarkdownTools

import {componentsData} from '../assets/data/components'
function MarkdownTools({ onComponentClick }) {
  const { categories } = componentsData; 

  


  
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="markdown-tools">
      <h2 className="tools-heading">Markdown Components</h2>
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className={`category-header ${activeIndex === index ? 'active' : ''}`} onClick={() => handleCategoryClick(index)}>
            <h3>{category.name}</h3>
            <span className="arrow">&#x25BC;</span>
          </div>
          {activeIndex === index && (
            <ul className="category-components">
              {category.components.map((component, idx) => (
                <li key={idx} onClick={() => onComponentClick(component.markdown)}>
                  {component.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default MarkdownTools;
