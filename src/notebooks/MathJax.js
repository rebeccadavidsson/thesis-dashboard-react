import React from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';

function MarkdownRender(props) {
    const newProps = {
        ...props,
        renderers: {
          ...props.renderers,
          math: (props) => 
            <MathJax.Node formula={props.value} />,
          inlineMath: (props) =>
            <MathJax.Node inline formula={props.value} />
        }
      };
      return (
        <MathJax.Provider input="tex">
            <ReactMarkdown {...newProps} />
        </MathJax.Provider>
      );
}

export default MarkdownRender