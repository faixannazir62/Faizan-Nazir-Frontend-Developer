export const Endpoints = (filters) => {
  var apiUrl = "https://api.spacexdata.com/v3/capsules?";
  // Loop through the object and append key-value pairs to the URL

  for (var key in filters) {
    apiUrl +=
      encodeURIComponent(key) + "=" + encodeURIComponent(filters[key]) + "&";
  }
  // Remove the trailing '&' character
  apiUrl = apiUrl.slice(0, -1);
  console.log(apiUrl);
  return apiUrl;
};
