import { useContext } from 'react';
import { useEntries } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const { entries } = useEntries()
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      {/* TODO: Replace hard-coded count with the actual number of entries */}
      <span>{entries.length} {entries.length > 1 ? 'Items' : 'Item' } Left,</span>
    </header>
  );
}
