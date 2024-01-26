import styles from './item-filter.module.css';

export const ItemFilter = () => {

  const itemTypes = [
    "Стиральный порошек",
    "Моющие средства",
    "Бытовая химия",
    "Средства гигиены",
    "Для кухни",
    "Средства для мытья полов",
    "Пятновыводители",
    "Средства защиты",
  ]

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <p className={styles.title}>Тип изделия</p>
        {itemTypes.map(item => (
          <div className={styles.item}>
            <input type="checkbox" name={item} value={item} />
            <label for={item}>{item}</label>
          </div>
        ))}
      </div>
      <div className={styles.price}>
        <p className={styles.title}>Цена</p>
        <input type="text" name="" id="" placeholder='от 290'/>
        <input type="text" name="" id="" placeholder='до 10 499 999'/>
      </div>
    </div >
  )
}