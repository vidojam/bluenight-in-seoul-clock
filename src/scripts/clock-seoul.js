const getCurrentTime = () => {

const options = {
  timeZone: 'Asia/Seoul',
  hour12: true,
  weekday: "long", 
  month:"long",
  day:"numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"

}  

  // Get the current time
  const currentTime = new Date().toLocaleString("en-US", options);

  // Render
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(getCurrentTime, 100);
}

const checkLeadingZero = (paramTime) => {
  paramTime < 10
    ? paramTime = `0$(paramTime)`
    : null
    return paramTime
}

