import { useCallback, useMemo, useState } from 'react';
import { CartContext } from '../hooks/useCart.js';

const STORAGE_KEY = 'net-store-cart';

function readStoredCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item) =>
        item &&
        Number.isInteger(item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart);

  const updateCart = useCallback((updater) => {
    setCartItems((currentItems) => {
      const nextItems = updater(currentItems);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      } catch {
        return nextItems;
      }

      return nextItems;
    });
  }, []);

  const addToCart = useCallback(
    (product) => {
      updateCart((items) => {
        const existingProduct = items.find((item) => item.id === product.id);

        if (existingProduct) {
          return items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...items, { ...product, quantity: 1 }];
      });
    },
    [updateCart],
  );

  const removeFromCart = useCallback(
    (productId) => {
      updateCart((items) => items.filter((item) => item.id !== productId));
    },
    [updateCart],
  );

  const updateQuantity = useCallback(
    (productId, quantity) => {
      updateCart((items) => {
        if (quantity <= 0) {
          return items.filter((item) => item.id !== productId);
        }

        return items.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        );
      });
    },
    [updateCart],
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
    }),
    [cartItems, addToCart, removeFromCart, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
