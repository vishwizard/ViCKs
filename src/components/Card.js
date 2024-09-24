export default function Card({ children, nopadding = false }) {
  const classes = `rounded-md  shadow-grey-300 bg-white ${nopadding ? 'p-0' : 'p-4'} mb-5 shadow-md`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
