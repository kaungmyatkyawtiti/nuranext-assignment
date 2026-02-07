export interface Project {
  id: number;
  category: string;
  title: string;
  client: string;
  image: string;
  color: string;
}

export interface ServiceItem {
  category: string;
  description: string;
  details: string[];
}

export interface Stat {
  value: number;
  label: string;
}
