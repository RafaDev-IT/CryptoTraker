export const get = async url => {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log('http get method error', error);
  }
};

export const post = async (url, body) => {
  try {
    const req = await fetch(url, {
      method: 'POST',
      body,
    });
    const json = await req.json();
    return json;
  } catch (error) {
    console.log('http post method error', error);
  }
};
