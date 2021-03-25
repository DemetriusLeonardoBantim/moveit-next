import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Voce alcancou um novo level</p>
        <button onClick={closeLevelUpModal} type="button">
          Fechar modal
        </button>
      </div>
    </div>
  );
}
