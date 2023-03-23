export function getMessage(): string {
  return 'Hello world!';
}

export interface Address {
  streetNum: number;
  streetName: string;
  city: string;
  postal: number;
}

export function setAddress(address: Address): Address {
  return address;
}
