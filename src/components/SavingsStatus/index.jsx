import { IconSavings } from '../icons'
import styles from './savingstatus.module.css'

export const SavingStatus = ({ percent }) => {

    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
        </div>
    )
    
}