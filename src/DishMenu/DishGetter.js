class DishGetter {

    static GetRnd(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    static GetDishByCategory(data) {
        const index = this.GetRnd(0, data.length - 1);
        return data[index];
    }
}

export { DishGetter }