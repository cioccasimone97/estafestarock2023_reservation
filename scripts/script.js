const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    var messageToSend = '';
    const aCapo='%0a';
    messageToSend='==========================='+aCapo;
    messageToSend=messageToSend+'*Richiesta prenotazione tavolo*'+aCapo;

    for(item of formData){
        //console.log(item[0], item[1]);

        switch(item[0]){
            case 'name':
                messageToSend=messageToSend+'Nominativo: ' + item[1] + aCapo;
                break;
            case 'phoneNumber':
                messageToSend=messageToSend+'Telefono: ' + item[1] + aCapo;
                break;
            case 'date':
                messageToSend=messageToSend+'Data: ' + item[1] + aCapo;
            break;
            case 'ora':
                messageToSend=messageToSend+'Ora: ' + item[1] + aCapo;
            break;
            case 'note':
                messageToSend=messageToSend+'Note: ' + item[1] + aCapo;
            break;
        }
    }

    messageToSend=messageToSend+'===========================';

    //Eseguo chiamata a api whatsapp
    const nPhoneNumberTo = '3492982845';

    console.log('messageToSend: ', messageToSend);
    window.open("https://wa.me/"+nPhoneNumberTo+'?text='+messageToSend);
})