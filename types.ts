export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  mapLink?: string;
}