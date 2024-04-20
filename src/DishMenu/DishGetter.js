import BreakfastData from './data/Breakfast';
import SoupData from './data/Soup';
import LunchData from './data/Lunch';
import DinnerData from './data/Dinner';
import SaladData from './data/Salad';
import DessertData from './data/Dessert.json';


class DishGetter {

    static GetRnd(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    static GetDishByCategory(data) {
        const index = this.GetRnd(0, data.length - 1);
        return data[index];
    }

    static GetDishCategory(category) {
        return DishGetter.GetDishLists().filter(e => e.category == category ? 1 : null)[0].item;
    }

    static GetNewDishList() {
        let dishes = [
            {
                category: 'breakfast',
                categoryRU: 'Завтрак',
                item: DishGetter.GetDishByCategory(BreakfastData)
            },
            {
                category: 'salad',
                categoryRU: 'Салат',
                item: DishGetter.GetDishByCategory(SaladData)
            },
            {
                category: 'soup',
                categoryRU: 'Первое блюдо',
                item: DishGetter.GetDishByCategory(SoupData)
            },
            {
                category: 'lunch',
                categoryRU: 'Второе блюдо',
                item: DishGetter.GetDishByCategory(LunchData)
            },
            {
                category: 'dinner',
                categoryRU: 'Ужин',
                item: DishGetter.GetDishByCategory(DinnerData)
            },
            {
                category: 'dessert',
                categoryRU: 'Дессерт',
                item: DishGetter.GetDishByCategory(DessertData)
            }
        ];
        return dishes;
    }

    static GetDishLists() {
        let dishLists = [
            {
                category: 'breakfast',
                categoryRU: 'Завтрак',
                item: DishGetter.GetDishByCategory(BreakfastData)
            },
            {
                category: 'salad',
                categoryRU: 'Салат',
                item: SaladData
            },
            {
                category: 'soup',
                categoryRU: 'Первое блюдо',
                item: SoupData
            },
            {
                category: 'lunch',
                categoryRU: 'Второе блюдо',
                item: LunchData
            },
            {
                category: 'dinner',
                categoryRU: 'Ужин',
                item: DinnerData
            },
            {
                category: 'dessert',
                categoryRU: 'Дессерт',
                item: DessertData
            }
        ];
        return dishLists;
    }
}

export { DishGetter }