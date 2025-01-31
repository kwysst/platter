import BreakfastData from '../source/dish-data/Breakfast';
import SoupData from '../source/dish-data/Soup';
import MainData from '../source/dish-data/Main';
import SaladData from '../source/dish-data/Salad';
import DessertData from '../source/dish-data/Dessert.json';


const GetRnd = (min, max) => Math.round(Math.random() * (max - min) + min);

export class DishesData {
    static DishObj = [
        {
            category: 'breakfast',
            categoryName: 'Завтраки',
            data: BreakfastData
        },
        {
            category: 'salad',
            categoryName: 'Салаты',
            data: SaladData
        },
        {
            category: 'soup',
            categoryName: 'Супы',
            data: SoupData
        },
        {
            category: 'main',
            categoryName: 'Горячее',
            data: MainData
        },
        {
            category: 'dessert',
            categoryName: 'Десерты',
            data: DessertData
        }
    ];

    static GetRandomDishByCategory(category) {
        let data = DishesData.GetDataByCategory(category);
        return data[GetRnd(0, data.length - 1)];

    }
    static GetDataByCategory(category) {
        return DishesData.DishObj.find(e => e.category === category).data;
    }

    static GetDishesListByCategory(category) {
        let catygoryObj = DishesData.DishObj.filter(e => e.category === category)[0];
        let dishList = [];
        for (let i = 0; i < catygoryObj.data.length; i++) {
            dishList[i] = {};
            dishList[i].category = catygoryObj.category;
            dishList[i].categoryName = catygoryObj.categoryName;
            dishList[i].item = catygoryObj.data[i];
        }
        return dishList;
    }

    static GetMenu(menuList, schema) {
        // both params by default are getting from localStorage
        const IsMenuValid = (menuList, schema) => {
            let validationSchema = schema.filter(e => e.status && e);
            if (menuList.length !== validationSchema.length) return false;
            let schemedMenu = menuList.filter((menuItem, i) => {
                return menuItem.category === validationSchema[i].category;
            });
            return schemedMenu.length === menuList.length;
        }
        const GetNewMenu = (schema) => {
            const menu = [];
            let validationSchema = schema.filter(e => e.status && e);
    
            validationSchema.forEach(e => {
                menu.push({
                    'category': e.category,
                    'categoryName': e.categoryName,
                    'item': DishesData.GetRandomDishByCategory(e.category)
                });
            });
    
            return menu;
        }
        const FindDish = (name, category) => {
            return DishesData.GetDataByCategory(category).find(dishItem => dishItem.name === name);
        }
        const GetCategoryName = (category) => {
            return DishesData.DishObj.find(e => e.category === category).categoryName;
        }
        

        if (!IsMenuValid(menuList, schema))
            menuList = GetNewMenu(schema);
        else
            menuList = menuList.map(e => e = {
                category: e.category,
                categoryName: GetCategoryName(e.category),
                item: FindDish(e.name, e.category)
            });
        
        return menuList;
    }

    static GetCategoryList() {
        return DishesData.DishObj.map(e => {
            return {
                'category': e.category,
                'categoryName': e.categoryName
        }})
    }
}