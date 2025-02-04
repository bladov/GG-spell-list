declare global {
	/*~ Here, declare things that go in the global namespace, or augment
	 *~ existing declarations in the global namespace
	 */

	type Tradition = "Тьма" | "Теургия" | "Стихии" | "Свет" | "Природа" | "Мистика" | "Аркана"
	type SpellType = "Воплощение" | "Магическая Защита" | "Испытание (Решимость)" | "Испытание (Стойкость)" | "Испытание (Воля)" | "Испытание (Рефлекс)" | "Атака Лучом" | "Магическая Атака" | "Воплощение или Испытание (Стойкость)"
	type Pronunciation = "Кубик Магии" | "Бонусное Действие" | "Реакция, в ответ на получение урона"
	type SpellRange = "Личная" | "Касание" | "Малая (6 клеток)" | "Средняя (12 клеток)" | "Дальняя (24 клетки)" | "Большая (24 клетки)"
	type SpellDuration = "Сцена/Ритуал" | "Сцена/Простой" | "Сцена" | "Сцена/Ритуал или 1 Кубик Действия" | "Пока не снято" | "1 День" | "1 минута"
	type SpellSquare = "Квадрат 2x2" | "Радиус 4 клетки" | "Радиус 6 клеток" | "Конус 4 клетки" | "Радиус 2 Клетки"

	interface SpellInfo {
		"name": string
		"circle": 1 | 2 | 3,
		"traditions": Traditions,
		"type": SpellType,
		"pronunciation": Pronunciation,
		"range": SpellRange,
		"effect": string,
		"critical_effect": string
		"duration"?: SpellDuration,
		"square"?: SpellSquare
	}
}

export { }
