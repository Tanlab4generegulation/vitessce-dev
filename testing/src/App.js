import React from 'react';
import { Vitessce } from 'vitessce';
import { myViewConfig } from './my-view-config';
// import 'vitessce/dist/es/production/static/css/index.css';

export default function App() {
  return (
    <Vitessce
      config={myViewConfig}
      theme="light"
    />
  );
}
