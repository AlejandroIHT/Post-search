class Http {
  static instance = new Http();

  get = async (url, API_ID) => {
    try {
      const req = await fetch(url, {
        headers: {
          'app-id': API_ID,
        },
      });
      const json = await req.json();

      return json;
    } catch (error) {
      console.log('Http get method error', error);
      throw Error(error);
    }
  };
}

export default Http;
