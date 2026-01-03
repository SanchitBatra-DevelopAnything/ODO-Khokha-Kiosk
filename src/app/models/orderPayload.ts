import { OrderItemPayload } from "./orderItemPayload";

export interface OrderPayload {
    items: OrderItemPayload[];
    orderTotal: number;
    paymentType: 'UPI' | 'CASH';
}