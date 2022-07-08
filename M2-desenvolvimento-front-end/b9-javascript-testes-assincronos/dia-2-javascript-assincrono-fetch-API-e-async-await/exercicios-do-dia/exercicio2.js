const cryptoNameValue = async () => {
  const conversion = await fetchCurrencies();
  await fetch('https://api.coincap.io/v2/assets/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data)
      data.data.forEach((element) => {
        if (element.rank <= 10) {
          const price = Number(element.priceUsd);
          const converted = price * conversion.brl;
          console.log(converted);
          const list = document.getElementById('mylist');
          const li = document.createElement('li');
          li.innerHTML = `${element.id}: R$ ${converted.toFixed(2)}`;
          list.appendChild(li);
        }        
      })
    });   
}

const fetchCurrencies = async () => {
  const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
    .then(response => response.json())
    .then(data => data.usd);

  return result;
}

cryptoNameValue();
