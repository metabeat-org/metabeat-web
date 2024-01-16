export function useDesktop() {
  const [desktop, setDesktop] = React.useState(false);
  const isDesktop = MediaQuery.useMediaQuery({
    minWidth: "576px",
  });

  React.useEffect(() => {
    setDesktop(isDesktop);
  }, [isDesktop]);

  return desktop;
}
