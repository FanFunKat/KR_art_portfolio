import { Panel } from "../Panel/Panel"
import styles from "./Pricing.module.css"

const offer = [
  {
    name: 'One photo',
    price: '$10',
    condition: ['already taken', 'no modifications', 'single use']
  },
  {
    name: 'x 10 pack',
    price: '$70',
    condition: ['already taken', 'single use']
  },
  {
    name: 'Custom',
    price: 'Contact us',
    condition: ['taken or new', 'modification', 'multi use']
  }
]

export const Pricing = () => {
  return (
    <div className={styles.pricing__box}>
      {offer.map(({ name, price, condition }) => {
        return (
          <Panel key={name} name={name} price={price} condition={condition} />
        )
      })}
    </div>
  )
}