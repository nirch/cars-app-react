
class CarModel {
    constructor(plainCarOrBrand, model, year, km, address) {
        if (typeof plainCarOrBrand === 'object') {
            this.brand = plainCarOrBrand.brand;
            this.model = plainCarOrBrand.model;
            this.year = plainCarOrBrand.year;
            this.km = plainCarOrBrand.km;
            this.address = plainCarOrBrand.address;
        } else {
            this.brand = plainCarOrBrand;
            this.model = model;
            this.year = year;
            this.km = km;
            this.address = address;
        }
    }

    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
}

export default CarModel;