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
        let localMenu = [];
        menu.map(e => localMenu.push({
            name: e.item.name,
            category: e.category
        }))
        localStorage.menuList = JSON.stringify(localMenu);
        LocalStorage.Print();
    }
    

    static GetFavList() {
        return JSON.parse(localStorage.favList || '[]');
    }
    static ToggleFav(dishData) {
        const AddFav = (dish) => {
            const favList = JSON.parse(localStorage.favList || '[]');
            favList.push({
                name: dish.item.name,
                category: dish.category
            });
            localStorage.favList = JSON.stringify(favList);
        }
        const RemoveFav = (dish) => {
            const favList = JSON.parse(localStorage.favList || '[]')
                .filter(favDish => favDish.name !== dish.item.name);
            localStorage.favList = JSON.stringify(favList);
        }


        const isFav = LocalStorage.GetFavList().find(e => e.name === dishData.item.name) !== undefined;
        if (isFav) RemoveFav(dishData);
        else AddFav(dishData);

        return !isFav;
    }


    static GetBlockList() {
        return JSON.parse(localStorage.blockList || '[]');
    }
    static ToggleBlock(dishData) {
        const AddBlock = (dish) => {
            const blockList = JSON.parse(localStorage.blockList || '[]');
            blockList.push({
                name: dish.item.name,
                category: dish.category
            });
            localStorage.blockList = JSON.stringify(blockList);
    
            LocalStorage.Print()
        }
        const RemoveBlock = (dish) => {
            const blockList = JSON.parse(localStorage.blockList || '[]')
                .filter(favDish => favDish.name === dish.item.name);
            localStorage.blockList = JSON.stringify(blockList);
        }


        const isBlock = LocalStorage.GetBlockList().find(e => e.name === dishData.item.name) !== undefined;
        if (isBlock) RemoveBlock(dishData);
        else AddBlock(dishData);

        return !isBlock;
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