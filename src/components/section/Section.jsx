import s from "./style.module.css";

export function Section({ title, content, classProp }) {
  return (
    <div className={`${classProp}`}>
      <span className={`fw-light ${s.message} text-uppercase`}>{title}</span>
      <hr />
      <div className={`${s.message}`}>{content}</div>
    </div>
  );
}
