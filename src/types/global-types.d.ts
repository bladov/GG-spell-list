declare global {
	/*~ Here, declare things that go in the global namespace, or augment
	 *~ existing declarations in the global namespace
	 */

	type Tradition = "Тьма" | "Теургия" | "Стихии" | "Свет" | "Природа" | "Мистика" | "Аркана" | "Хаос"

	interface SpellInfo {
		"name": string
		"circle": 1 | 2 | 3 | 4,
		"traditions": Traditions,
		"type": string,
		"pronunciation": string,
		"range": string,
		"effect": string,
		"critical_effect": string
		"duration"?: string,
		"square"?: string
	}
}

export { };

