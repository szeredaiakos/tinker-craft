import Header from "./Header";
import Menu from "./Menu";

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        style={{
          width: 'calc(100vw - 320px)',
          paddingTop: 64,
          marginLeft: 320,
        }}
      >
        {children}
      </div>
      <Menu />
      <Header />
    </>
  );
}
