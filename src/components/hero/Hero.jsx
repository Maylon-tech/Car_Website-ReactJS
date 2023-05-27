import React from 'react'
import styles from '../hero/Hero.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <form>
            <div className={styles.text}>
              <label htmlFor="where">Where</label>
              <input className={styles.text_input} type="text" placeholder='Search Location' />
            </div>

            <div className={styles.from}>
              <label className={styles.border} htmlFor="from">From</label>
              <input type="date"/>
            </div>

            <div className={styles.until}>
              <label className={styles.border} htmlFor="until">Until</label>
              <input type='date' />
            </div>

            <div className={styles.search_btn}>
              <AiOutlineSearch className={styles.icon} />
              <button className={styles.btn}>Search for cars</button>
            </div>

        </form>
    </section>
  )
}

export default Hero