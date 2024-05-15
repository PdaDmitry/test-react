import css from './User.module.css';

export default function User({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contContact}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
