type Item = {
  id: number;
  title: string;
  link: string;
};

export type SidebarLinks = {
  subtitle: string;
  items: Item[];
}[];
