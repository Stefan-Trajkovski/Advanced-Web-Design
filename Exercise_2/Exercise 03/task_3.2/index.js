/**
 @author Stefan Trajkovski <trajkovski.stefan@hotmail.com>
 */

change = function () {
    let anchor = document.createElement("a");
    anchor.innerText = document.getElementById("toBeChanged").innerHTML;
    anchor.setAttribute("href", document.getElementById("toBeChanged").innerHTML);
    document.body.replaceChild(anchor, document.getElementById("toBeChanged"));
};