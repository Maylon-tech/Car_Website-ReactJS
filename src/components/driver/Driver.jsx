import React from 'react'
import styles from './Drive.module.css'

import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>

        <div className={styles.left}>
            <img src={Drive} alt="" />
        </div>

        <div>
          <h2>
            Find Your Perfect Car <span>to try before you buy</span>
            {''}
          </h2>
          <p>
            Make sure your future wheels work well with your lifestyle by takihng your time in the driver's seat.
          </p>
          <button>Browser Cars</button>
        </div>

    </div>
  )
}

export default Driver