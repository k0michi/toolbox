import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../src/style.css';
import formatISO from 'date-fns/formatISO';
import { formatRFC3339, formatRFC7231 } from 'date-fns';

interface FrameProps {
  children: any;
}

const Frame = (props: FrameProps) => {
  return <div>
    {props.children}
  </div>
};

const Main = () => {
  const [now, setNow] = React.useState<Date>(new Date());

  React.useEffect(()=>{
    function tick() {
      setNow(new Date());
      window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);
  },[]);

  return <Frame>
    <h1>Date and Time</h1>
    <div id="container-column">
      <div>ISO 8601: {formatISO(now)}</div>
      <div>RFC 7231: {formatRFC7231(now)}</div>
    </div>
  </Frame>;
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<Main />);