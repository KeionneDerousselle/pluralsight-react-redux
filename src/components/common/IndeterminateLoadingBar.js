import React from 'react';
import '../../styles/loading.css';

const IndeterminateLoadingBar = () => {
  return(
    <div className="progress">
      <div className="progress-bar indeterminate"></div>
    </div>
  );
};

export default IndeterminateLoadingBar;