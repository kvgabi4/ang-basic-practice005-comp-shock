export class User {
  [key: string]: any;
  id: number = 0;
  name: string = 'Joe';
  email: string = 'joe@joe.com';
  address: string = 'hungary';
  active: boolean = true;

  constructor(properties?: User) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || '';
      this.email = properties.email || '';
      this.address = properties.address || '';
      this.active = properties.active || true;
    }
  }
}
