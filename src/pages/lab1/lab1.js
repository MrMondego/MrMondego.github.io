import React from 'react';
import '../../css/lab1.css';

import CurrentTime from './CurrentTime';
import Stock from './Stock'
import Chess from './Chess';

export default function Lab1() {
    return (
    <main>
      <CurrentTime />
      <Stock />
      <Chess />
    </main>
    )
}