
function getCountries () {
    $.ajax(
        "http://localhost:8002/countries",
        {
            success: function (data, status, response) {
                console.log(data);
            }

        }
    )
}
$(function () {
$("#btnShowCountries").click(function () {
 var countries = getCountries()
 console.log(countries);
})
})
getCountries()