// src/services/api.ts

// Define o formato do Produto (baseado na FakeStoreAPI)
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const BASE_URL = 'https://fakestoreapi.com';

export const api = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        return response.json();
    },

    getProductById: async (id: string): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        return response.json();
    },

    getCategories: async (): Promise<string[]> => {
        const response = await fetch(`${BASE_URL}/products/categories`);
        return response.json();
    }
};