import { computed } from 'vue';
import debounce from 'lodash.debounce';

export function useSpellSearch(spellList: SpellList, searchQuery: Ref<string>) {
    const debouncedSearchQuery = ref(searchQuery.value);
    const foundSpellIds = ref<SpellInfo[]>([]);
  
    // Дебаунс на 300 мс (можно изменить)
    const updateDebouncedQuery = debounce((newQuery: string) => {
      debouncedSearchQuery.value = newQuery;
    }, 300);
  
    // Следим за изменением searchQuery и применяем debounce
    watchEffect(() => {
      updateDebouncedQuery(searchQuery.value);
    });
  
    // Основная computed-логика поиска (срабатывает после debounce)
    const searchSpells = computed(() => {
      if (debouncedSearchQuery.value.length < 3) return [];
      
      const query = debouncedSearchQuery.value.toLowerCase().trim();
      const resultIds = new Set<SpellInfo>();
  
      Object.values(spellList).forEach(spells => {
        spells.forEach(spell => {
          const fieldsToSearch = [
            spell.name,
            spell.type,
            spell.pronunciation,
            spell.range,
            spell.effect,
            spell.critical_effect,
            spell.duration || '',
            spell.square || '',
            ...spell.traditions
          ];
  
          if (fieldsToSearch.some(field => field.toLowerCase().includes(query))) {
            resultIds.add(spell);
          }
        });
      });
  
      return Array.from(resultIds);
    });
  
    // Следим за результатами searchSpells и обновляем foundSpellIds
    watch(searchSpells, (newIds) => {
      foundSpellIds.value = newIds;
    }, { immediate: true });
  
    return { foundSpellIds };
  }