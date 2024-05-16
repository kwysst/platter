class LocalStorage {

	static CheckForUpdates() {
        // LocalStorage.Delete();
        if (localStorage.updated !== new Date().toLocaleDateString()) {
            // update date
            localStorage.updated = new Date().toLocaleDateString();
            localStorage.menuList = [];

            LocalStorage.Print()
        }
	}


    static GetSchema() {
        // TODO: complete default schema
        return (localStorage.schema && JSON.parse(localStorage.schema)) || [
            // default schema
            { category: 'breakfast', categoryName: 'Завтраки', status: true }
        ];
    }
    static SetSchema(schema) {
        localStorage.schema = JSON.stringify(schema);
    }

    
    static GetMenu() {
        return (localStorage.menuList && JSON.parse(localStorage.menuList)) || [];
    }
    static SetMenu(menu) {
        let localMenu = [];
        menu.map(e => localMenu.push({
            name: e.item.name,
            category: e.category
        }))
        localStorage.menuList = JSON.stringify(localMenu);
        LocalStorage.Print();
    }
    

    static GetFavouriteList() {
        return (localStorage.menuList && JSON.parse(localStorage.favourite)) || [];
    }
    static AddFavourite(dish) {
        const favList = JSON.parse(localStorage.favList || '[]');
        favList.push({
            name: dish.item.name,
            category: dish.category
        });
        localStorage.favList = JSON.stringify(favList);

        LocalStorage.Print()
    }
    static RemoveFavourite(dish) {
        const favList = JSON.parse(localStorage.favList || '[]');
        favList.filter(favDish => favDish.name === dish.item.name);
        localStorage.favList = JSON.stringify(favList);
    }


    static Print() {
        console.log({ localStorage: {
            updated: localStorage.updated,
            menuList: (localStorage.menuList && JSON.parse(localStorage.menuList)) || [],
            schema: (localStorage.schema && JSON.parse(localStorage.schema)) || [],
            favList: (localStorage.favList && JSON.parse(localStorage.favList)) || []
        }})
    }

    static Delete() {
        delete localStorage.updated;
        delete localStorage.menuList;
        delete localStorage.menu;
        delete localStorage.favourite;
        delete localStorage.schema;
        delete localStorage.favList;
    }
}

export { LocalStorage }