const ONE_HOUR = 60 * 60 * 1000;

export function getCachedData(key) {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    const { data, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp > ONE_HOUR) {
      // Caché expirada
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function setCachedData(key, data) {
  const item = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(item));
}