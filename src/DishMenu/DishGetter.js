class DishGetter {

    static GetRnd(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    static GetDishByCategory(data, category) {
        let list = data[category];
        return list[this.GetRnd(0, list.length - 1)];
    }
}

export { DishGetter }