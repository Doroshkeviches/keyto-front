export default function sumDigits(num1: number, num2: number, num3: number) {
    const str = num1.toString() + num2.toString() + num3.toString()
    const arr = str.split('')
    const res = arr.reduce((sum, digit) => sum + +digit, 0);
    if (res > 9) {
        return sumOneDigits(res)
    }
    return res

}
export function sumOneDigits(n: string | number): number {
    const str = n.toString()
    const arr = str.split('')
    const res = arr.reduce((sum, digit) => sum + +digit, 0);
    if (res > 9) {
        return sumOneDigits(res)
    }
    return res
}

function sumOfDigits(number: number): number {
    if (number < 10) {
        return number
    }
    // Преобразуем число в строку, чтобы удобно было работать с каждой цифрой
    let str = number.toString();
    let sum = 0;

    // Проходим по каждой цифре строки и добавляем её значение к сумме
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    return sumOfDigits(+sum);
};
export function dateConverter(dateString: Date) {
    // Исходная строка даты

    // Преобразуем строку в объект Date
    const date = new Date(dateString);

    // Извлекаем день, месяц и год
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
    const year = date.getFullYear();

    // Формируем строку в формате dd.mm.yyyy
    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate
}