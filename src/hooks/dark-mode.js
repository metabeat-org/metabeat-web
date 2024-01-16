export function useDarkmode() {
  const [darkmode, setDarkmode] = React.useState(false);

  React.useEffect(() => {
    const headerNode = document.getElementById("header");
    const observer = new MutationObserver(handleObserve);

    observer.observe(headerNode, {
      attributes: true,
      attributeFilter: ["class"],
      childlist: false,
      characterData: false,
    });

    function handleObserve(e) {
      const isDarkMode = e[0].target.classList.contains("dark");
      const isActive = e[0].target.classList.contains("active");
      setDarkmode(isDarkMode && !isActive);
    }

    handleObserve([{ target: headerNode }]);
  }, []);

  return darkmode;
}
