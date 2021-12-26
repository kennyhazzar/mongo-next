import Link from "next/link";

import style from '../styles/NavButton.module.scss'

const NavButton = props => (
    <Link href={props.path}>
        <div className={style.NavButton}>
            <span className={style.Label}>{props.label}</span>
        </div>
    </Link>
)

export default NavButton