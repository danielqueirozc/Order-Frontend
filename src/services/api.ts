import axios, { AxiosRequestConfig, Headers } from "axios";

export interface LoginData {
    username: string;
    password: string;
}

export interface RegisterData extends LoginData {
    name: string;
}

export interface Order {
    id: number;
    totalValue: number;
    createdDate: string;
    orderItems: OrderItem[];
  }

  export interface OrderItem {
    id: number;
    idProduct: number;
    valor: number;
    product: Product;
  }

  export interface Product {
    id: number;
    name: string;
    description: string;
    value: number;
  }

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
       ( config.headers as Headers).Authorization = `Bearer ${token}`;
    }
    return config;
});


export const authService = {
    login: async (data: LoginData) => {
        const response = await api.post('/login', data);
        return response.data;
    },

    register: async (data: RegisterData) => {
        const response = await api.post('/register', data);
        return response.data;
    }
}

export const orderService = {
    getOrders: async () => {
        const response = await api.get('/orders');
        return response.data;
    },

    createOrder: async (totalValue: number) => {
        const response = await api.post('/orders', { totalValue });
        return response.data;
    }
}