
function Send() {
  return (
    <div id="mailid">
      <input
        id="mail"
        name="mailfrom"
        placeholder="enter mail"
        required
      ></input>
      <button onClick={sendMail(mail)}>Submit</button>
    </div>
  );
}
function Login(mail) {
  var link =
    "mailto:{mail}" +
    "?cc=myCCaddress@example.com" +
    "&subject=" +
    encodeURIComponent("your otp is 2345") +
    "&body=" +
    encodeURIComponent(document.getElementById("myText").value);
  window.location.href = link;
}

