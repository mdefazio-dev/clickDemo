function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function showClickWrapper() {
  document.getElementById ("start").style.display = "none";
  document.getElementById("ds-terms-of-service").sytle.display = "block";
  docuSignClick.Clickwrap.render({
      environment: 'https://demo.docusign.net',
      accountId: '53e87a81-3ab4-43d4-9d29-b7861bfc1e1e',
      clickwrapId: '8d6ef161-0398-40d7-be90-03136af40036',
      clientUserId: makeid(12),
      format: 'modal'
    }, '#ds-terms-of-service');
}
