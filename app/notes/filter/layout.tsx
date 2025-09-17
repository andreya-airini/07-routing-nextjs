type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <aside>{sidebar}</aside>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          padding: 0,
          margin: "10px",
          height: "200px",
          width: "300px",
          listStyle: "none",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default NotesLayout;
