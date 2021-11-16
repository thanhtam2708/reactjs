import instance from "./instance";
export const getAllCate = () => {
    const url = `/categories`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};
export const add = (item) => {
    const url = `/categories`;
    return instance.post(url, item);
};
export const update = (item) => {
    const url = `/categories/${item.id}`;
    return instance.put(url, item);
};