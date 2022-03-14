import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE } from '../tokens/config.tokens';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  readonly _isAvailable: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _memoryStore: { [key: string]: any } = {};
  _prefix = '';

  get prefix() {
    return this._prefix;
  }
  set prefix(prefix: string) {
    this._prefix = prefix ? prefix + '_' : '';
  }

  constructor(@Inject(SESSION_STORAGE) public storage: Storage) {
    this._isAvailable = this.__storageAvailable();
  }

  /**
   * Is any item currently stored under `key`?
   * @param key Key identifying item to check
   * @returns True if key retrieves an item, false otherwise
   */
  hasItem(key: string): boolean {
    if (this._isAvailable) {
      return sessionStorage.getItem(this.prefix + key) ? true : false;
    } else {
      return Object.prototype.hasOwnProperty.call(this._memoryStore, key);
    }
  }

  /**
   * Gets an item.
   * @param key Key to identify the item
   * @returns The item (if any) retrieved by the key
   */
  getItem(key: string): string | null {
    if (this._isAvailable) {
      return sessionStorage.getItem(this.prefix + key);
    } else {
      return Object.prototype.hasOwnProperty.call(this._memoryStore, key) ? this._memoryStore[this.prefix + key] : null;
    }
  }

  /**
   * Stores an item
   * @param key Key to identify the item
   * @param data Data to store
   */
  setItem(key: string, data: string) {
    if (this._isAvailable) {
      sessionStorage.setItem(this.prefix + key, data);
    } else {
      this._memoryStore[this.prefix + key] = data.toString();
    }
  }

  /**
   * Removes a single item.
   * @param key Key to identify the item
   */
  removeItem(key: string) {
    if (this._isAvailable) {
      sessionStorage.removeItem(this.prefix + key);
    } else {
      delete this._memoryStore[this.prefix + key];
    }
  }

  /** Removes all currently stored items. */
  clear() {
    if (this._isAvailable) {
      sessionStorage.clear();
    } else {
      this._memoryStore = {};
    }
  }

  __storageAvailable(): boolean {
    try {
      const key = '__storage_test__';
      this.storage.setItem(key, 'Test value...');
      this.storage.removeItem(key);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
