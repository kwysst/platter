import BreakfastData from '../source/dish-data/Breakfast';
import SoupData from '../source/dish-data/Soup';
import LunchData from '../source/dish-data/Lunch';
import DinnerData from '../source/dish-data/Dinner';
import SaladData from '../source/dish-data/Salad';
import DessertData from '../source/dish-data/Dessert.json';


const GetRnd = (min, max) => Math.round(Math.random() * (max - min) + min);

class DishGetter {

    static GetDishByCategory(data) {
        const index = GetRnd(0, data.length - 1);
        return data[index];
    }

    static GetDishData(category) {
        return DishGetter.GetDishLists().filter(e => e.category === category ? 1 : null)[0].item;
    }

    static GetNewMenu() {
        return DishGetter.DishObj.map(e => {
            return {
                'category': e.category,
                'categoryName': e.categoryName,
                'item': DishGetter.GetDishByCategory(e.data)
        }});
    }
    static GetCategories() {
        return DishGetter.DishObj.map(e => {
            return {
                'category': e.category,
                'categoryName': e.categoryName
        }})
    }
    // static GetSchema(category, categoryName) {
    //     return {
    //         category: category,
    //         categoryName: categoryName,
    //         status: true
    //     }
    // }
    
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