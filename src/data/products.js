const API_URL = 'https://fakestoreapi.com/products';

const normalizeProduct = (product) => ({
  id: product.id,
  name: product.title,
  description: product.description,
  price: Math.round(product.price * 12000),
  originalPrice: Math.round(product.price * 12000),
  image: product.image,
  category: product.category,
  rating: product.rating ?? { rate: 0, count: 0 },
});

let productsPromise;

export async function fetchProducts() {
  if (!productsPromise) {
    productsPromise = fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Не удалось загрузить каталог');
        return response.json();
      })
      .then((products) => products.map(normalizeProduct))
      .catch((error) => {
        productsPromise = null;
        throw error;
      });
  }

  return productsPromise;
}

export async function fetchProduct(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Mahsulot topilmadi');
  return normalizeProduct(await response.json());
}

export function formatPrice(value) {
  return new Intl.NumberFormat('uz-UZ').format(value);
}
