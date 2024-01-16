export function Link({ href, children, ...props }) {
  if (!href) {
    return <></>;
  }

  const isInternalHref = href.startsWith("/");

  return (
    <a
      href={href}
      {...(!isInternalHref && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...props}
    >
      {children}
    </a>
  );
}
