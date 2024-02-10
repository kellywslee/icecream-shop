// eslint-disable-next-line react/prop-types
export default function User({ user: { displayName } }) {
  return <span>hello, {displayName}</span>;
}
