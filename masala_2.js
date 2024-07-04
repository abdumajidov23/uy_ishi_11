function move(arr, fromIndex, toIndex) {
    const array = [...arr]; // Massivning nusxasini olish
    const element = array.splice(fromIndex, 1)[0]; // Elementni olib tashlash
    array.splice(toIndex, 0, element); // Elementni yangi joyga qo'yish
    return array;
}

// Sinov ma'lumotlari
console.log(move([10, 20, 30, 40, 50], 0, 2)); // [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10, 20, 30, 50, 40]
