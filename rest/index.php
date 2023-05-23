<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// Set the headers for the response
header('Content-Type: application/json');
// Retrieve the endpoint from the URL parameters
$endpoint = $_GET['endpoint'];

// Get the headers from the request
$headers = getallheaders();

// Set the headers for the request
$requestHeaders = [
    'Content-Type: application/json'
];

// Make the request to the SpaceX API endpoint
$context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => implode("\r\n", $requestHeaders)
    ]
]);
$response = file_get_contents($endpoint, false, $context);

// Handle the response
if ($response) {
    // The request was successful
    echo $response;
} else {
    // An error occurred
    echo json_encode(['error' => 'Error fetching data from the SpaceX API.']);
}
?>
