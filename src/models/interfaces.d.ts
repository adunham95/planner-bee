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
  events?: Event[];
  eCards?: ECard[];
  contacts?: Contact[];
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
  eCardSku: string | null;
  invitation?: ECardTemplate | null;
  events?: Event[];
}

export interface EventThemeOptions {
  id: string;
  key: string | null;
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
  imageURL: string | null;
  eventTheme?: EventTheme[];
  visible: boolean;
  invitation?: Event[];
  eCards?: ECard[];
}

export interface ECardComponent {
  id: string;
  key: string | null;
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
  status: string | null;
  event?: Event[];
  eCard?: ECard[];
  orderOptions?: OptionItem[];
  customerName: string | null;
  customerEmail: string | null;
  customerID: string | null;
  customer?: User | null;
}

export interface Event {
  id: string;
  orderID: string;
  order?: Order;
  senderEmail: string | null;
  senderID: string | null;
  sender?: User | null;
  eventNumber: string | null;
  eventDate: Date | null;
  eventTemplateSku: string;
  eventTemplate?: EventTheme | null;
  invitationSku: string | null;
  invitation?: ECardTemplate | null;
  addOns: string[];
  recipients?: Recipient[];
  options?: OptionItem[];
}

export interface ECard {
  id: string;
  orderID: string;
  order?: Order;
  senderEmail: string | null;
  senderID: string | null;
  sender?: User | null;
  deliveryDate: Date | null;
  eCardNumber: string | null;
  eCardTemplateSku: string;
  eCardTemplate?: ECardTemplate;
  addOns: string[];
  recipients?: Recipient[];
  options?: OptionItem[];
}

export interface OptionItem {
  id: string;
  eCardId: string | null;
  eCard?: ECard | null;
  eventId: string | null;
  event?: Event | null;
  orderID: string | null;
  order?: Order | null;
  value: string;
  key: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Recipient {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  eventID: string | null;
  event?: Event | null;
  eCardID: string | null;
  eCard?: ECard | null;
  rsvpStatus: string | null;
  contactID: string | null;
  contact?: Contact | null;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  recipients?: Recipient[];
  userID: string | null;
  user?: User | null;
}

export interface NewsletterSignUp {
  id: string;
  email: string | null;
  createdAt: Date;
}
