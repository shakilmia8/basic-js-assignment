//1. A function with seerToMon has been declared

function seerToMon(seer) {
    if (seer < 0) {
        const error = 'please enter positive value';
        return error;
    }
    const mon = seer / 40;
    return mon;

}
const result = seerToMon(120);
// console.log(result);


//2. A function with totalSales has been declared

function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    if (shirtsQuantity < 0 || pantsQuantity < 0 || shoesQuantity < 0) {
        const error = 'please enter positive value';
        return error;
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalShirtPrice = shirtsQuantity * shirtPrice;
    const totalPantPrice = pantsQuantity * pantPrice;
    const totalShoePrice = shoesQuantity * shoePrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}
const output = totalSales(1, 1, 1);
// console.log(output);


//3. A function with deliveryCost has been declared

function deliveryCost(tshirtDeliveryQuantity) {
    const perTshirtDeliveryCost1st100 = 100;
    const perTshirtDeliveryCost2nd100 = 80;
    const perTshirtDeliveryRestCost = 50;
    if (tshirtDeliveryQuantity < 0) {
        const error = 'please enter positive value';
        return error;
    }
    else if (tshirtDeliveryQuantity <= 100) {
        const totalTshirtDeliveryCost = tshirtDeliveryQuantity * perTshirtDeliveryCost1st100;
        return totalTshirtDeliveryCost;
    }
    else if (tshirtDeliveryQuantity <= 200) {
        const first100TshirtDeliveryCost = 100 * perTshirtDeliveryCost1st100;
        const restTshirtDeliveryQuantity = tshirtDeliveryQuantity - 100;
        const second100TshirtDeliveryCost = restTshirtDeliveryQuantity * perTshirtDeliveryCost2nd100;
        const totalTshirtDeliveryCost = first100TshirtDeliveryCost + second100TshirtDeliveryCost;
        return totalTshirtDeliveryCost;
    }
    else {
        const first100TshirtDeliveryCost = 100 * perTshirtDeliveryCost1st100;
        const second100TshirtDeliveryCost = 100 * perTshirtDeliveryCost2nd100;
        const restTshirtDeliveryQuantity = tshirtDeliveryQuantity - 200;
        const restTshirtDeliveryCost = restTshirtDeliveryQuantity * perTshirtDeliveryRestCost;
        const totalTshirtDeliveryCost = first100TshirtDeliveryCost + second100TshirtDeliveryCost + restTshirtDeliveryCost;
        return totalTshirtDeliveryCost;
    }

}
const totalDeliveryCost = deliveryCost(750);
// console.log(totalDeliveryCost);


//4. A function with perfectFriend has been declared

const bestFriend = ['anoboti', 'jakaria', 'nasarahmed', 'nakib', 'maruf', 'nasir', 'delowar'];

function perfectFriend(bestFriend) {
    for (let i = 0; i < bestFriend.length; i++) {
        if (bestFriend[i].length == 5) {
            names = bestFriend[i];
            break
        }
    }
    return names;
}
let friendName = perfectFriend(bestFriend);
// console.log(friendName);

