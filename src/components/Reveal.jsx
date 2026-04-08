function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div className={`reveal ${className}`.trim()} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

export default Reveal;