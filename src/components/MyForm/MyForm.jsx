import { useId, useState } from 'react';
import css from './MyForm.module.css';

export default function MyForm({ lalala, contact, setContact }) {
  const userId = useId();
  const numberId = useId();

  // const [contact, setContact] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    lalala({ contact, number });
    setContact('');
    setNumber('');
    // e.target.reset();
  };

  return (
    <form className={css.contForm} onSubmit={handleSubmit}>
      <div className={css.contInput}>
        <label htmlFor={userId}>Username</label>
        <input type="text" id={userId} value={contact} onChange={e => setContact(e.target.value)} />
      </div>

      <div className={css.contInput}>
        <label htmlFor={numberId}>Number</label>
        <input type="text" id={numberId} value={number} onChange={e => setNumber(e.target.value)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
