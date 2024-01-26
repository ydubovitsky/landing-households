import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Товары</p>
        <p><span>для дома</span></p>
      </div>
      <div className={styles.ringContainer}>
        <div className={styles.ringTitle}>
          <p>до <span className={styles.discount}>- 40%</span></p>
          <p>дополнительно</p>
          <p> на все</p></div>
      </div>
      <div className={styles.promo}>
        <p>до 17 декабря по коду: <span>Дом</span></p>
        <p className={styles.promoAdditional}>На все товары предоставляется дополнительная скидка до 10% предоставляется последовательно к оплате бонусами 50% по Программе лояльности на всю бытовую химию и моющие средства.</p>
      </div>
    </div>
  )
}