// This file was auto-generated by prisma-generator-typescript-interfaces

export interface User {
  id: string;
  email: string;
  password_hash: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  sessions?: Session[];
  orders?: Order[];
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  user?: User;
}

export interface EventTheme {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  sku: string;
  cost: number | null;
  createdAt: Date;
  updatedAt: Date;
  options?: EventThemeOptions[];
  orderProduct?: OrderProduct[];
}

export interface EventThemeOptions {
  id: string;
  label: string | null;
  editable: boolean | null;
  default: string | null;
  options: string | null;
  customStyles: string | null;
  displayOrder: number;
  componentID: string;
  eventThemeID: string;
  eventTheme?: EventTheme;
}

export interface ECardTemplate {
  id: string;
  sku: string;
  name: string;
  description: string;
  cost: number;
  createdAt: Date;
  updatedAt: Date;
  components?: ECardComponent[];
  order?: Order[];
  imageURL: string | null;
  orderProducts?: OrderProduct[];
}

export interface ECardComponent {
  id: string;
  ecardComponentID: string;
  ecardID: string;
  ecard?: ECardTemplate;
  label: string | null;
  editable: boolean | null;
  default: string | null;
  customStyles: string | null;
  options: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  orderNumber: string | null;
  createdAt: Date;
  updatedAt: Date;
  ecardSku: string | null;
  eCard?: ECardTemplate | null;
  senderName: string | null;
  senderEmail: string | null;
  senderID: string | null;
  sender?: User | null;
  eCardOptions?: EcardOrderOptions[];
  recipients?: Recipient[];
  status: string | null;
  products?: OrderProduct[];
}

export interface OrderProduct {
  id: string;
  ecardSku: string | null;
  eventThemeSku: string | null;
  addOnSku: string | null;
  ecard?: ECardTemplate | null;
  eventTheme?: EventTheme | null;
  orderID: string;
  order?: Order;
  options?: OrderProductOption[];
}

export interface OrderProductOption {
  id: string;
  orderProductID: string;
  orderProduct?: OrderProduct;
  value: string;
  key: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EcardOrderOptions {
  id: string;
  orderID: string;
  order?: Order;
  value: string;
  ecardComponentID: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Recipient {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  orderID: string;
  order?: Order;
}
