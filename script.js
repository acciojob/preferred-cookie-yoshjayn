//your JS code here. If required.

  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Function to get cookie value by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }

  // Load saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }

  // Save preferences in cookies when form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    document.cookie = `fontsize=${fontSizeInput.value}; path=/; max-age=31536000`;
    document.cookie = `fontcolor=${fontColorInput.value}; path=/; max-age=31536000`;
    document.documentElement.style.setProperty("--fontsize", fontSizeInput.value + "px");
    document.documentElement.style.setProperty("--fontcolor", fontColorInput.value);
  });

