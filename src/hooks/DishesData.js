import BreakfastData from '../source/dish-data/Breakfast';
import SoupData from '../source/dish-data/Soup';
import LunchData from '../source/dish-data/Lunch';
import DinnerData from '../source/dish-data/Dinner';
import SaladData from '../source/dish-data/Salad';
import DessertData from '../source/dish-data/Dessert.json';


const GetRnd = (min, max) => Math.round(Math.random() * (max - min) + min);

export class DishesData {

    static GetDataByCategory(category) {
        return DishesData.DishObj.filter(e => e.category === category ? e : null)[0].data;
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

    static GetMenu(menu, schema) {
        // both params by default are getting from localStorage
        const IsMenuValid = (menu, schema) => {
            let validationSchema = schema.filter(e => e.status && e);
            if (menu.length !== validationSchema.length) return false;
            let schemedMenu = menu.filter((dish, i) => {
                return dish.category === validationSchema[i].category 
                    ? dish 
                    : null;
            });
            return schemedMenu.length === menu.length;
        }
        const GetNewMenu = (schema) => {
            const menu = [];
            let validationSchema = schema.filter(e => e.status && e);
    
            validationSchema.forEach(e => {
                let data = DishesData.GetDataByCategory(e.category);
                menu.push({
                    'category': e.category,
                    'categoryName': e.categoryName,
                    'item': data[GetRnd(0, data.length - 1)]
                });
            });
    
            return menu;
        }

        
        if (!IsMenuValid(menu, schema))
            menu = GetNewMenu(schema);
        
        return menu;
    }

    static GetCategoryList() {
        return DishesData.DishObj.map(e => {
            return {
                'category': e.category,
                'categoryName': e.categoryName
        }})
    }
    
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
            category: 'lunch',
            categoryName: 'Ланчи',
            data: LunchData
        },
        {
            category: 'dinner',
            categoryName: 'Ужины',
            data: DinnerData
        },
        {
            category: 'dessert',
            categoryName: 'Дессерты',
            data: DessertData
        }
    ];
}