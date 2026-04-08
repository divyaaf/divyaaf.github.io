function PageHeading({ eyebrow, title }) {
  return (
    <header className="page-heading reveal" style={{ '--delay': '80ms' }}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
    </header>
  );
}

export default PageHeading;