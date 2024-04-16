if (!localStorage['dishes'] || !localStorage['updated']) {
    localStorage['dishes'] = JSON.stringify([]);
	localStorage['updated'] = JSON.stringify('01.01.1970');
}

class LocalDB {

	static CheckForUpdates() {
        if (localStorage['updated'] !== new Date().toLocaleDateString()) {
            // LocalDB.UpdateDate();
            localStorage['dishes'] = [];
        }
	}

    static SetDishes(dishes) {
        localStorage['dishes'] = JSON.stringify(dishes);
        LocalDB.Print()
    }
    static GetDishes() {
        return localStorage['dishes'];
    }
    static UpdateDate() {
        localStorage['updated'] = new Date().toLocaleDateString();
    }


    static Print() {
        console.log({
            updated: localStorage['updated'],
            dishes: JSON.parse(localStorage['dishes'])
        })
    }
}

export { LocalDB }