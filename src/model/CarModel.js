
class CarModel {
    constructor(plainCarOrBrand, model, year, km) {
        if (typeof plainCarOrBrand === 'object') {
            this.brand = plainCarOrBrand.brand;
            this.model = plainCarOrBrand.model;
            this.year = plainCarOrBrand.year;
            this.km = plainCarOrBrand.km;
        } else {
            this.brand = plainCarOrBrand;
            this.model = model;
            this.year = year;
            this.km = km;    
        }
    }

    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
}

export default CarModel;