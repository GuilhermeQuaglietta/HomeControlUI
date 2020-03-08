import { Injectable } from '@angular/core';

const HOURSTOEXPIRE = 1;
export const JWTUSERKEY = "jwtUser";
export const JWTUSERSTRINGKEY = "jwtUserString";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    const expirationDate = this.calculateExpirationDate(HOURSTOEXPIRE);
    const data = this.generateLocalStorageItem(value, expirationDate);
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T {
    const value = localStorage.getItem(key);
    if (value === null) return null;

    const localStorageItem: LocalStorageItem<T> = JSON.parse(value);

    if (localStorageItem === undefined) {
      return null;
    }

    const now = new Date();
    if (new Date(localStorageItem.expirationDate) < now) {
      return null;
    }

    return localStorageItem.value;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  private generateLocalStorageItem<T>(value: T, expirationDate: Date): LocalStorageItem<T> {
    return {
      value,
      expirationDate
    };
  }

  private calculateExpirationDate(hoursToExpire: number) {
    let now = new Date();
    now.setHours(now.getHours() + 1);
    return now;
  }
}
