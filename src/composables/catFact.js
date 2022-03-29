import { computed, ref, onMounted } from '@vue/composition-api';

import { loadFact } from '@/api/catFacts';

export const useCatFact = () => {
  const apiFact = ref(null);
  const loading = ref(false);

  const factMessage = computed(() => apiFact.value?.fact);

  const loadNewFact = async () => {
    if (loading.value) {
      return;
    }

    loading.value = true;

    apiFact.value = null;

    const response = await loadFact();

    // Force wait a second
    const forcedDelay = 500;
    await new Promise(resolve => setTimeout(resolve, forcedDelay));

    apiFact.value = response.data;

    loading.value = false;
  };

  onMounted(() => {
    loadNewFact();
  });

  return {
    apiFact,
    factMessage,
    loading,
    loadNewFact
  }
};
