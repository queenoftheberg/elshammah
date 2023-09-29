/* J a v a s c r i p t   for  elshammah site
*/
function giva(hoosit='testing') {
    const sun = "@";
    const wun = "elshammah.org";
    const im1 = "El-Shammah online emailer";
    const ig1 = "El-Shammah online emailing";
    const mnm = "mailto:";
    const sbj = "?subject=";
    let sit0= mnm + hoosit + sun + wun + sbj + im1;
    let sit1 = mnm + hoosit + sun + wun + sbj + ig1;
    let sit2 = hoosit + sun + wun;
    let sit = [sit0,sit1,sit2];
    return sit;
}
function emladrex(referral) {
    /* replace dummy text with valid info */
    /*document.getElementById("sendbutton").type = "submit";*/
    /*document.getElementById("copter").id = "humanonly";*/
    /*document.getElementById("emlbutton").value = "Please Send form OR Click / Right-click -  on the valid email";*/
    document.getElementById('testpara').innerHTML = 'AdreX';
    const mal = giva('reachout');
    document.getElementById('testpara').innerHTML = 'valid: ' + mal[2];
    document.getElementById('showpara').innerHTML = 'Anything is possible to them that believe';
    if (referral!='fishnet') {
        document.getElementById('showpara').innerHTML = 'Yoo hoo now';
        return false;
    };
    document.getElementById('showpara').innerHTML = 'God is good ALL the time';
    
    document.getElementById('emladr').onclick = "finks('catfish')";
    document.getElementById("emladr").href = mal[0];
    document.getElementById("emladr").innerHTML = mal[2];
    document.getElementById("emladr").title = "Please Click here to Send / Right-click or Select to Copy";

    document.getElementById('emladrimg').onclick = "finks('catfish')";
    document.getElementById("emladrimg").href = mal[1];
    document.getElementById("emladrimg").title = "Please Click here to send / right-click or select to copy";
    
    document.getElementById("dummy").value = "done";
    document.getElementById("topast").className = "tosea";
    document.getElementById("pasta").className = "tosea";
    document.getElementById("pasta").value = mal[2];
    document.getElementById("clicktext").innerHTML = "Please Click email to send/ select or right-click to copy";
    document.getElementById("emlbutton").value = "Please Click on the valid email";
    document.getElementById("emlbutton").title = "Please Click on the valid link to send / select or right-click to copy";
    document.getElementById("emlbutton").alt = "Please Click on the valid email to send / select or right-click to copy";
    document.getElementById("emlbutton").id = "emlbut";
    document.getElementById("emlwaiter").innerHTML = "If you Click the email address, then Wait a moment for mail app to open<br />or Right-click (or select) to copy for web-based mail";
    document.getElementById("emlwaiter").id = "emlwait";
}
/* ================================================================================================= */
function finks(hoois = 'tester') {
    let mil = giva('reachout');
    document.getElementById('testpara').innerHTML = 'finks: ' + mil[2];
    document.getElementById('showpara').innerHTML = 'God is good ALL the time';
    if (hoois!='catfish') {
        document.getElementById('showpara').innerHTML = 'sumthing fishy going on here';
        return false;
    };
    document.getElementById("dummy").value = "GigAtt";
    document.getElementById("clicktext").innerHTML = "Thank you. We trust you SENT the mail from your mail app or browser.";
    document.getElementById("emlbut").value = "Email Sent";
    document.getElementById("emlbut").title = "(provided you SENT the message in your mail app)";
    document.getElementById("emlbut").alt = "Mission Accomplished (or resend?)";
    document.getElementById("emlbut").id = "emlbutton";
    document.getElementById("emlwait").id = "emlwaiter";
    document.getElementById("emlwaiter").innerHTML = "If the mail was not sent successfully, <br />please just try again. <br />";

    document.getElementById("emladr").href = mil[0];
    document.getElementById("emladr").innerHTML = mil[2];
    document.getElementById("emladr").title = "The robot checker is back, protecting email addresses from spammers";

    document.getElementById("emladrimg").href = mil[1];
    document.getElementById("emladrimg").title = "The robot checker is back, protecting email addresses from spammers";
}

function makeReload() {
    window.history.forward(1);
} /* this is not used- replaced by Tip for users at bottom of Home page to Refresh/ Reload */

