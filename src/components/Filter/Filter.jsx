import { useId } from 'react';
import css from './Filter.module.css';

export default function Filter({ value, onFilter }) {
  const findId = useId();

  return (
    <div className={css.contFilter}>
      <label htmlFor={findId}>Find contacts</label>
      <input type="text" id={findId} value={value} onChange={e => onFilter(e.target.value)} />
    </div>
  );
}
