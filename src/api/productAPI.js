import instance from "./instance";
export const getAll = () => {
    const url = `/products?_expand=category`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const get2 = (item) => {
    const url = `products/${item.id}`;
    return instance.get2(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (item) => {
    const url = `/products`;
    return instance.post(url, item);
};
export const update = (item) => {
    const url = `/products/${item.id}/edit`;
    return instance.put(url, item);
};
export const getByCate = (id) => {
    const url = `/products?categoryId=${id}`;
    return instance.get(url);
};