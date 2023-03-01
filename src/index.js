import React from 'react';

import { createRoot } from  'react-dom/client'

import { App } from './app/App.js';
import { store } from './app/store.js';



const container = document.getElementById('app');
const root = createRoot(container)
const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />
  )
}
store.subscribe(render);
render();