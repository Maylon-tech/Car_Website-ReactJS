import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from the top luxury vehicles to roll in style</span>
                </p>
            </div>
        </div>

        <div className={styles.container}>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1570280406792-bf58b7c59247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className={styles.content}>
                    <h1>Rolls Royce</h1>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1618486613447-553cd00864a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
                <div className={styles.content}>
                    <h1>Mercedes</h1>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1563720223489-bb7691336194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className={styles.content}>
                    <h1>Range Rover</h1>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1587350855729-bab6beeac1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className={styles.content}>
                    <h1>Jaguar</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Luxury