const API_URL = 'https://fakestoreapi.com/products';
const PRICE_RATE = 12000;

function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.title,
    description: product.description,
    price: Math.round(product.price * PRICE_RATE),
    image: product.image,
    category: product.category,
    rating: product.rating ?? { rate: 0, count: 0 },
  };
}

let productsPromise;

async function request(url, signal) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error('Unable to load products right now.');
  }

  return response.json();
}

export function fetchProducts({ signal } = {}) {
  if (!productsPromise) {
    productsPromise = request(API_URL, signal)
      .then((products) => products.map(normalizeProduct))
      .catch((error) => {
        productsPromise = null;
        throw error;
      });
  }

  return productsPromise;
}

export async function fetchProduct(productId, { signal } = {}) {
  const product = await request(`${API_URL}/${productId}`, signal);
  return normalizeProduct(product);
}

export function formatPrice(value) {
  return new Intl.NumberFormat('uz-UZ').format(value);
}
