import BreakfastData from '../source/dish-data/Breakfast';
import SoupData from '../source/dish-data/Soup';
import LunchData from '../source/dish-data/Lunch';
import DinnerData from '../source/dish-data/Dinner';
import SaladData from '../source/dish-data/Salad';
import DessertData from '../source/dish-data/Dessert.json';


const GetRnd = (min, max) => Math.round(Math.random() * (max - min) + min);

class DishGetter {

    static GetDishByData(data) {
        const index = GetRnd(0, data.length - 1);
        return data[index];
    }

    static GetDataByString(category) {
        return DishGetter.DishObj.filter(e => e.category === category ? e : null)[0].data;
    }

    static IsMenuValid(menu, schema) {
        let validationSchema = schema.filter(e => e.status && e);
        if (menu.length !== validationSchema.length) return false;
        let schemedMenu = menu.filter((dish, i) => {
            return dish.category === validationSchema[i].category 
                ? dish 
                : null;
        });
        return schemedMenu.length === menu.length;
    }

    static GetValidMenu(schema) {
        const menu = [];
        let validationSchema = schema.filter(e => e.status && e);

        validationSchema.forEach(e => {
            let data = DishGetter.GetDataByString(e.category);
            menu.push({
                'category': e.category,
                'categoryName': e.categoryName,
                'item': DishGetter.GetDishByData(data)
            });
        });

        return menu;
    }

    static GetCategories() {
        return DishGetter.DishObj.map(e => {
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

export { DishGetter }