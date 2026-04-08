function Panel({ as: Component = 'section', className = '', children }) {
  return <Component className={`panel ${className}`.trim()}>{children}</Component>;
}

export default Panel;