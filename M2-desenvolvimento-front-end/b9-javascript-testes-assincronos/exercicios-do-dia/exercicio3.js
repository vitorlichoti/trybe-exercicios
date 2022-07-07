const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const currentTemp = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemp} degree Celsius`), messageDelay());
};

sendMarsTemperature();