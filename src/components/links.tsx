import React, { useState } from 'react';

function Links() {
  const [content, setContent] = useState('');

  const handleLinkClick = async () => {
    try {
      const response = await fetch('/external-content');
      const data = await response.text();
      setContent(data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  return (
    <>
      <p>
        <button
          className="link-underline-primary"
          onClick={handleLinkClick}
        >
          Load Google Content
        </button>
      </p>
      <div className="content-div" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default Links;
