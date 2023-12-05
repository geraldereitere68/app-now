/*
   FILE: ComplexProgram.js
   DESCRIPTION: This program demonstrates an elaborate and complex JavaScript code implementing a car rental management system.
*/

// Class representing a Car Rental Agency
class CarRentalAgency {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.cars = [];
    this.customers = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar(car) {
    const index = this.cars.indexOf(car);
    if (index !== -1) {
      this.cars.splice(index, 1);
    }
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  rentCar(customer, car) {
    if (car.isAvailable()) {
      car.setAvailability(false);
      customer.rentedCars.push(car);
      console.log(`${customer.name} rented ${car.make} ${car.model}.`);
    } else {
      console.log(`${car.make} ${car.model} is not available for rental.`);
    }
  }

  returnCar(customer, car) {
    if (customer.rentedCars.includes(car)) {
      car.setAvailability(true);
      customer.rentedCars.splice(customer.rentedCars.indexOf(car), 1);
      console.log(`${customer.name} returned ${car.make} ${car.model}.`);
    } else {
      console.log(`${customer.name} didn't rent ${car.make} ${car.model}.`);
    }
  }
}

// Class representing a Car
class Car {
  constructor(make, model, year, availability) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.availability = availability;
  }

  isAvailable() {
    return this.availability;
  }

  setAvailability(availability) {
    this.availability = availability;
  }
}

// Class representing a Customer
class Customer {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.rentedCars = [];
  }

  displayRentedCars() {
    console.log(`${this.name} has rented the following cars:`);
    this.rentedCars.forEach((car) => {
      console.log(`${car.make} ${car.model} (${car.year})`);
    });
  }
}

// Creating a car rental agency
const agency = new CarRentalAgency("SuperRent", "City Center");

// Creating cars available for rental
const car1 = new Car("Toyota", "Camry", 2020, true);
const car2 = new Car("Honda", "Civic", 2019, true);
const car3 = new Car("Ford", "Mustang", 2021, false);

// Adding cars to the rental agency
agency.addCar(car1);
agency.addCar(car2);
agency.addCar(car3);

// Creating customers
const customer1 = new Customer("John Doe", 30, "123 Main St");
const customer2 = new Customer("Jane Smith", 25, "456 Elm St");

// Adding customers to the rental agency
agency.addCustomer(customer1);
agency.addCustomer(customer2);

// Renting a car
agency.rentCar(customer1, car1);
agency.rentCar(customer2, car3);

// Displaying rented cars of a customer
customer1.displayRentedCars();
customer2.displayRentedCars();

// Returning a car
agency.returnCar(customer2, car3);

// Displaying rented cars of a customer after returning
customer2.displayRentedCars();
