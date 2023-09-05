twoHighest = arr => [...new Set (arr.sort((a,b) => b - a))].slice(0,2) /*Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. 
Метод slice() возвращает новый массив, содержащий копию части исходного массива. Объект Set позволяет хранить уникальные значения любого типа, будь то примитивы или ссылки на объекты.
Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
для элементов (литералов массива)
для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)*/