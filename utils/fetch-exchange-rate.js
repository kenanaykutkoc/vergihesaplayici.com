const fetchExchangeRate = async (from, to) => {
    const apiUrl = `https://api.exchangerate.host/latest?base=${from}&symbols=${to}`;
    return await fetch(apiUrl)
        .then(response => response.json())
        .then(response => response.rates[to]);
};

export default fetchExchangeRate;
