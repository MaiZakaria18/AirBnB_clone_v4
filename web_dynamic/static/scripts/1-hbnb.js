$(document).ready(function() {
    // Variable to store Amenity IDs
    var checkedAmenities = {};

    // Function to update the h4 tag inside the div Amenities with the list of Amenities checked
    function updateAmenitiesList() {
        var amenitiesList = Object.values(checkedAmenities).join(", ");
        $(".amenities h4").text("Amenities: " + amenitiesList);
    }

    // Listen for changes on each input checkbox tag
    $(".amenities input[type='checkbox']").change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, store the Amenity ID in the variable
        if ($(this).is(":checked")) {
            checkedAmenities[amenityId] = amenityName;
        } 
        // If the checkbox is unchecked, remove the Amenity ID from the variable
        else {
            delete checkedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        updateAmenitiesList();
    });
});
