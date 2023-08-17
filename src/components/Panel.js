function Panel({ children, ...rest }) {
  return (
    <div {...rest} className="panel">
      {children}
    </div>
  );
}

export default Panel;
