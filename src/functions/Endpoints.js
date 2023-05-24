export const Endpoints = ({ filters, filtersActive }) => {
  //api link
  var apiUrl = "https://api.spacexdata.com/v3/capsules?";
  if (filtersActive === true) {
    // Loop through the object and append key-value pairs to the URL
    for (var key in filters) {
      apiUrl +=
        encodeURIComponent(key) + "=" + encodeURIComponent(filters[key]) + "&";
    }
    // Remove the trailing '&' character
    apiUrl = apiUrl.slice(0, -1);
    return apiUrl;
  }
  return apiUrl;
};
