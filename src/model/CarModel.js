import axios from "axios";

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

    async calcCarPosition() {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec`);
        this.position = response.data.results[0].geometry.location;
    }
}

export default CarModel;