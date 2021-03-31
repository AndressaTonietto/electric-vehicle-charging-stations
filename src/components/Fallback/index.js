import React from 'react';

import Loader from 'react-loader-spinner';

export default function Fallback({ fall, children }) {
  if (fall) {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }

  return children;
}
