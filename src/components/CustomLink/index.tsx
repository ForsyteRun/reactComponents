interface ICustomLink {
  href: string;
  children: React.ReactNode;
  styles: React.CSSProperties;
}

const CustomLink = ({ href, children, styles }: ICustomLink) => {
  return (
    <a href={href} style={styles}>
      {children}
    </a>
  );
};

export default CustomLink;
