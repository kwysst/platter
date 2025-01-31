import BreakfastData from '../source/dish-data/Breakfast';
import SoupData from '../source/dish-data/Soup';
import MainData from '../source/dish-data/Main';
import SaladData from '../source/dish-data/Salad';
import DessertData from '../source/dish-data/Dessert.json';


const Categories = {
    list: {
        menu: {
            category: 'menu',
            categoryName: 'Меню',
            dishes: []
        },
        breakfast: {
            category: 'breakfast',
            categoryName: 'Завтраки',
            dishes: BreakfastData
        },
        salad: {
            category: 'salad',
            categoryName: 'Салаты',
            dishes: SaladData
        },
        soup: {
            category: 'soup',
            categoryName: 'Супы',
            dishes: SoupData
        },
        main: {
            category: 'main',
            categoryName: 'Горячее',
            dishes: MainData
        },
        dessert: {
            category: 'dessert',
            categoryName: 'Десерты',
            dishes: DessertData
        }
    },

    Onload: () => {
        Object.values(Categories.list).forEach(category => {
            category.dishes.forEach(dish => {
                dish.category = category.category
                dish.categoryName = category.categoryName
            })
        });
    },
    RandomDish: (category) => {
        let data = Categories.list[category].dishes;
        return data[Math.round(Math.random() * (data.length - 1))];
    },
    GetMenu: (menuList, schema) => {
        // both params by default are getting from localStorage
        const IsMenuValid = (menuList, schema) => {
            let validationSchema = schema.filter(e => e.status);
            if (menuList.length !== validationSchema.length) 
                return false;
            let schemedMenu = menuList.filter((menuItem, i) => menuItem.category === validationSchema[i].category);
            return schemedMenu.length === menuList.length;
        }
        
        if (!IsMenuValid(menuList, schema)) // get new dishes
            menuList = schema.filter(e => e.status).map(e => Categories.RandomDish(e.category));
        else // load dishes info from Categories
            menuList = menuList.map(e => Categories.list[e.category].dishes.find(dish => dish.name === e.name));
        
        return menuList;
    }
};

export { Categories };