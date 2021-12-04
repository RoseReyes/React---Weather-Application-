import React from 'react';
import './App.css';

import Forecast from './components/Forecast/Forecast';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMapMarkerAlt, faTemperatureHigh, faTemperatureLow);

function App() {
  return (
    <div className="App">
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
