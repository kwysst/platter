class LocalDB {

	static CheckForUpdates() {
        if (localStorage.updated !== new Date().toLocaleDateString()) {
            LocalDB.UpdateDate();
            localStorage.menu = [];

            LocalDB.Print()
        }
	}

    static SetSchema(schema) {
        localStorage.schema = JSON.stringify(schema);
    }
    static SetMenu(menu) {
        localStorage.menu = JSON.stringify(menu);
        LocalDB.Print();
    }

    static GetSchema() {
        // TODO: complete default schema
        return (localStorage.schema && JSON.parse(localStorage.schema)) || [
            { category: 'breakfast', categoryName: 'Завтраки', status: true }
        ];
    }
    static GetMenu() {
        return (localStorage.menu && JSON.parse(localStorage.menu)) || null;
    }
    static UpdateDate() {
        localStorage.updated = new Date().toLocaleDateString();
    }


    static Print() {
        console.log({
            updated: localStorage.updated,
            menu: (localStorage.menu && JSON.parse(localStorage.menu)) || [],
            schema: (localStorage.schema && JSON.parse(localStorage.schema)) || []
        })
    }
}

export { LocalDB }