
import styles from './Sidebar.module.css'

import {PencilSimpleLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/ItaloPereiraDev.png"/>
                <strong>Ítalo Pereira</strong>
                <span>Desenvolvedor Front-End</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}