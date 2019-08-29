let request = window.indexedDB.open('dailyDrinksDB', 1);
let db;
let objectStore;

export function initialDB(data) {
    request.onerror = (e) => {
        console.log(e.target.errorCode);
    };

    request.onsuccess = (e) => {
        db = request.result;
        console.log(e.target);
    };

    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains('orders')) {
            objectStore = db.createObjectStore('orders', { keyPath: 'key', autoIncrement: true });

            data.forEach((order) => {
                objectStore.add(order)
            });
        }
    }
}

const helper = {
    initialDB,
};

export default helper;