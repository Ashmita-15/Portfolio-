function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 22.513990, lng: 88.409317};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kolkata, INDIA' // Title Location
    });
}