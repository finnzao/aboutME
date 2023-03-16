import styles from "./Item.module.css"
function Item(props) {
    let itens = props.list;
    let n = 0

    return (
        <>
            <div className={styles.link}>
   
                <a className={styles.center} href={props.link} target="_blank" rel="noopener noreferrer">

                    <div id="div" className={styles.Container}>
                        <div className={styles.topItem}>
                            <div className={styles.circleNav}></div>
                            <div className={styles.circleNav}></div>
                            <div className={styles.circleNav}></div>
                        </div>
                        <div className={styles.bottomItem}>
                        <h2>{props.title}</h2>
                        <div className={styles.text}>{props.text}</div>
                        <ul className={styles.list}>
                            {itens.map((item) => (

                                < li > {item}</li>
                            ))}

                        </ul>
                        </div>
                    </div>
                </a>
            </div>
        </>

    )
}
