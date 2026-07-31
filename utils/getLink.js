export const getLink = (element, clientId) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${clientId}/${element.file}`;
};