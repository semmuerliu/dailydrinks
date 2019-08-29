let request = window.indexedDB.open('dailyDrinksDB', 1);
let db;
let objectStore;

function onError() {
    request.onerror = (e) => {
        console.log(e.target.errorCode);
    };
}

function onSuccess() {
    request.onsuccess = (e) => {
        db = request.result;
        console.log(e.target);
    };
}

function onUpgradeNeeded(data) {
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

export function initialDB(data) {
    onError();
    onSuccess();
    onUpgradeNeeded(data);
}

const helper = {
    initialDB,
};

export default helper;