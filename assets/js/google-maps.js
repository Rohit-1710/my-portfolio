function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 19.849792, lng: 75.235190}; 
    // 19.849792114915022, 75.23519059741244
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sara Sarthak, 431136' // Title Location
    });
}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.770985993409!2d75.23043772322059!3d19.849640743944736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9bcd6b6b3e97%3A0x8008acf1610cd4aa!2sSara%20Sarthak!5e0!3m2!1sen!2sin!4v1667852116389!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}