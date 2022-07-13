export const keyStorage = {
  eCommercePoo: "eCommercePoo",
  currentUser: null
};

export default class Storage {
  static attachChangeDetection = (callback) => {
    window.addEventListener("storage", callback);
  };

  static detachChangeDetection = (callback) => {
    window.removeEventListener("storage", callback);
  };

  static setItem = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
  };

  static getItem = (storageKey) => {
    return JSON.parse(localStorage.getItem(storageKey));
  };

  static removeItem = (storageKey) => {
    localStorage.removeItem(storageKey);
  };

  static clear = () => {};
}
