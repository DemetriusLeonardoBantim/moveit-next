import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/demetriusleonardobantim.png"
        alt="Demetrius Leonardo"
      />
      <div>
        <strong>Demetrius Leonardo</strong>
        <p>Level {level}</p>
      </div>
    </div>
  );
}
