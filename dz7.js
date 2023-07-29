class Car {
    constructor(brand, speedKmPerHour) {
      this.brand = brand;
      this.speedKmPerHour = speedKmPerHour;
    }
  
    get speedUS() {
      return this.speedKmPerHour / 1.6;
    }
  
    set speedUS(speedMilesPerHour) {
      this.speedKmPerHour = speedMilesPerHour * 1.6;
    }
  
    accelerate(acceleration) {
      this.speedKmPerHour += acceleration;
      console.log(`Ускорение на ${acceleration} км/ч. Текущая скорость: ${this.speedKmPerHour} км/ч`);
    }
  
    brake(deceleration) {
      this.speedKmPerHour -= deceleration;
      console.log(`Торможение на ${deceleration} км/ч. Текущая скорость: ${this.speedKmPerHour} км/ч`);
    }
  }
  
  const fordCar = new Car("Форд", 120);
  
  console.log(`Текущая скорость: ${fordCar.speedKmPerHour} км/ч`);
  console.log(`Текущая скорость: ${fordCar.speedUS} миль/ч`);
  
  fordCar.speedUS = 75;
  console.log(`Текущая скорость: ${fordCar.speedKmPerHour} км/ч`);
  
  fordCar.accelerate(20);
  
  fordCar.brake(10);