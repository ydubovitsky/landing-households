import styles from './jewelry-list.module.css';

const items = [
  {
    id: 0,
    name: 'Моющее средство',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    name: 'Средства гигиены',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Химия бытовая',
    price: '270.50 р.',
    oldPrice: '320.00 р.',
    discont: '10%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://plus.unsplash.com/premium_photo-1679503074226-2a7123da1ad2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Моющее средство',
    price: '500.50 р.',
    oldPrice: '1300.00 р.',
    discount: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1604762433261-a046add6fc11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Моющее средство',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    name: 'Средство гигиены',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Моющее средство',
    price: '450.50 р.',
    oldPrice: '500.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://plus.unsplash.com/premium_photo-1679501956116-97589191fafb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Моющее средство',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discount: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Для кухни',
    price: '700.50 р.',
    oldPrice: '1000.00 р.',
    discont: '30%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    name: 'Бытовая химия',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Моющее средство',
    price: '200.50 р.',
    oldPrice: '300.00 р.',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Пятновыводители',
    price: '100.50 р.',
    oldPrice: '200.00 р.',
    discount: '20%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export const JewelryList = () => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <div className={styles.item}>
          <img src={item.imgUrl} alt="" srcset="" />
          <div className={styles.priceContainer}>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.oldPrice}>{item.oldPrice}</p>
            <p className={styles.discount}>{item.discount}</p>
          </div>
          <h1>{item.name}</h1>
          <div className={styles.ratingContainer}>
            <p>☆ {item.rating}</p>
            <p>Коментарии: {item.commentsCount}</p>
            <p>+ {item.bonuses} бонусов</p>
          </div>
        </div>
      ))}
    </div>
  )
}