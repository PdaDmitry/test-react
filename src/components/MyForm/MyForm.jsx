import { useId, useState } from 'react';
import css from './MyForm.module.css';
import { nanoid } from 'nanoid';

export default function MyForm({ onAdd }) {
  const userId = useId();
  const numberId = useId();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contForm} onSubmit={handleSubmit}>
      <div className={css.contInput}>
        <label htmlFor={userId}>Username</label>
        <input type="text" id={userId} value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className={css.contInput}>
        <label htmlFor={numberId}>Number</label>
        <input type="text" id={numberId} value={number} onChange={e => setNumber(e.target.value)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
