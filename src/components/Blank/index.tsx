import React, { useState } from 'react';

import { Container, InfoConnection, Line, ImageConnection } from './styles';

const Blank: React.FC = () => {
  const [system] = useState(
    window.navigator.platform.match(/^Mac/) ? 'Mac' : 'Windows',
  );

  return (
    <Container>
      <ImageConnection />
      <InfoConnection>
        <h3>Keep your phone connected</h3>
        <p>
          WhatsApp connects to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi.
        </p>
        <Line />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 18"
            width="21"
            height="18"
          >
            <path
              fill="#919191"
              d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"
            />
          </svg>
          <p>
            {`WhatsApp is available for ${system}. `}
            <a
              href="https://www.whatsapp.com/download"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get it here
            </a>
          </p>
        </div>
      </InfoConnection>
    </Container>
  );
};

export default Blank;
