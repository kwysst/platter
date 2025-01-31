class LocalStorage {

	static CheckForUpdates() {
        // LocalStorage.Delete();
        if (localStorage.updated !== new Date().toLocaleDateString()) {
            // update date
            localStorage.updated = new Date().toLocaleDateString();
            localStorage.menuList = [];
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
        return JSON.parse(localStorage.menuList || '[]');
    }
    static SetMenu(menu) {
        localStorage.menuList = JSON.stringify(menu.map(e => {
            return {
                name: e.name,
                category: e.category
            }
        }));
        LocalStorage.Print();
    }
    

    static isFav(name) {
        return LocalStorage.GetFavList().find(e => e.name === name) !== undefined;
    }
    static GetFavList() {
        return JSON.parse(localStorage.favList || '[]');
    }
    static ToggleFav(dish) {
        const AddFav = (dish) => {
            const favList = JSON.parse(localStorage.favList || '[]');
            favList.push({
                name: dish.name,
                category: dish.category
            });
            localStorage.favList = JSON.stringify(favList);
        }
        const RemoveFav = (dish) => {
            const favList = JSON.parse(localStorage.favList || '[]')
                .filter(favDish => favDish.name !== dish.name);
            localStorage.favList = JSON.stringify(favList);
        }

        if (LocalStorage.isFav(dish.name)) RemoveFav(dish);
        else AddFav(dish);

        return LocalStorage.isFav(dish.name);
    }
    

    static isBlock(name) {
        return LocalStorage.GetBlockList().find(e => e.name === name) !== undefined;
    }
    static GetBlockList() {
        return JSON.parse(localStorage.blockList || '[]');
    }
    static ToggleBlock(dish) {
        const AddBlock = (dish) => {
            const blockList = JSON.parse(localStorage.blockList || '[]');
            blockList.push({
                name: dish.name,
                category: dish.category
            });
            localStorage.blockList = JSON.stringify(blockList);
        }
        const RemoveBlock = (dish) => {
            const blockList = JSON.parse(localStorage.blockList || '[]')
                .filter(blockDish => blockDish.name !== dish.name);
            localStorage.blockList = JSON.stringify(blockList);
        }


        if (LocalStorage.isBlock(dish.name)) RemoveBlock(dish);
        else AddBlock(dish);

        return LocalStorage.isBlock(dish.name);
    }


    static Print() {
        console.log({ localStorage: {
            updated: localStorage.updated,
            menuList: JSON.parse(localStorage.menuList || '[]'),
            schema: JSON.parse(localStorage.schema || '[]'),
            favList: JSON.parse(localStorage.favList || '[]'),
            blockList: JSON.parse(localStorage.blockList || '[]')
        }})
    }

    static Delete() {
        delete localStorage.updated;
        delete localStorage.menuList;
        delete localStorage.schema;
        delete localStorage.favList;
        delete localStorage.blockList;
    }
}

export { LocalStorage }