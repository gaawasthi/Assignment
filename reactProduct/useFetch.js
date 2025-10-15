
//custom hook to fetch api 
export const useFetch = async ({
  url = '',
  body = null,
  method = 'GET',
  header = {},
}) => {
  const res = await fetch(url, {
    method,
    body,
    headers: { ...header },
  });
  const data = await res.json();
  return data;
};
