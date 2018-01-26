import React from "react";

import '../styles/main.scss'
import '../styles/_avalanche.scss'
import '../styles/components/HorizontalList.scss'



export default ({ children }) => (
  <ul className="inline-list">
      {children}
  </ul>
);
