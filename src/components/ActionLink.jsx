function ActionLink({ href, children, className = '', variant = 'primary' }) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      className={`action-link action-link-${variant} ${className}`.trim()}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export default ActionLink;