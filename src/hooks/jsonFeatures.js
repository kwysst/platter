import { DishesData } from './DishesData';

window.beautifyJSON = function beautifyJSON(category) {
    let result = '[';
    console.log(DishesData.GetDishesListByCategory(category));
    DishesData.GetDishesListByCategory(category)
    .sort((a, b) => a.item.name > b.item.name ? 1 : -1)
    .forEach(obj => {
        let dish = obj.item
        result += `{\n"name":"${dish.name}",\n"kbju":[${dish.kbju.toString()}],\n"time":"${dish.time}",\n"products":[\n`;
        result += dish.products.map(e => '\t"'+e+'"').join(',\n');
        result += `],\n"recipe": [\n`;
        result += dish.recipe.join('.').replace(/[.]{2}/g, '.').replace(/[.]{1}$/g, '').split(/[.]{1}\s*/).map(e => '\t"'+e+'"').join(',\n');
        result += `]\n},\n`
    })
    result += ']'
    console.log(result);
}

window.getAlreadyHaving = function() {
    let result = '';
    DishesData.DishObj.forEach(obj => {
        result += obj.categoryName + '\n';
        obj.data.forEach(dish => result += '\t' + dish.name + '\n');
    });
    console.log(result);
}