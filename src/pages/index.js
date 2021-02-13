import styles from '../styles/pages/Home.module.css'

import useDarkMode from '../hooks/useDarkMode'

export default function Home() {
  const [, toggleDarkMode] = useDarkMode()

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>
          Hello Next.js dark mode toggle
        </p>
        <button className={styles.toggle} onClick={toggleDarkMode}>
          TOGGLE THEME
        </button>
      </div>
    </div>
  )
}
