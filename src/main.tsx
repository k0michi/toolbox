import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';

interface FrameProps {
  children: any;
}

const Frame = (props: FrameProps) => {
  return <div>
    {props.children}
  </div>
};

const Main = () => {
  const [raw, setRaw] = React.useState('');
  const [escaped, setEscaped] = React.useState('');

  return <Frame>
    <h1>XML Escape/Unescape</h1>
    <div id="container">
      <div>
        Unescaped
        <textarea onChange={e => {
          setRaw(e.target.value);
          setEscaped(escape(e.target.value));
        }} value={raw} />
      </div>
      <div>
        Escaped
        <textarea onChange={e => {
          setRaw(unescape(e.target.value));
          setEscaped(e.target.value);
        }} value={escaped} />
      </div>
    </div>
  </Frame>;
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<Main />);

const table = {
  '&': '&amp;',
  '"': '&quot;',
  "'": '&apos;',
  '<': '&lt;',
  '>': '&gt;'
};

function escape(string: string) {
  for (const [l, e] of Object.entries(table)) {
    string = string.replaceAll(l, e);
  }

  return string;
}

function unescape(string: string) {
  for (const [l, e] of Object.entries(table)) {
    string = string.replaceAll(e, l);
  }

  return string;
}