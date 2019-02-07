function myFunction(a, b) {
 
    return a + b;
}
function arrays() {
    var pens;
    pens = new Array ("red", "yellow", "orange", "purple");

    markers = pens;
    console.log(markers);
    console.log(markers[0]);

    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("length of array is: "+ markers.length);
}