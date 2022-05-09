export const IsAdult = ({ className, boolean, children }) => {
  return <>{boolean && <p className={className}>{children}</p>}</>;
};
