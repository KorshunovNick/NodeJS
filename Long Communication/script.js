// function sendMessage(elem,message){
//     if (!message || !elem) return;
//     let newMessage = document.createElement('div')
//     newMessage.append(message)
//     elem.append(newMessage)
// }
// send.addEventListener('click',()=>{
//     let container = document.querySelector('.new-messages')
//     sendMessage(container,message.value)
// })

//___________________________________________________________________________________________________

// new PublishForm(document.forms[0],url)
// new longComm(document.querySelector('.new-message'),url)

function PublishForm(form,url){

    function sendMessage(message){
        fetch(url,{
            method:'POST',
            body: message
        })
    }

    form.onsubmit = ()=>{
        let message = form.message.value
        if (!message) return;
        sendMessage(message)
    }
}

function longComm(elem,url){

    function showMessage(message){
    if (!message || !elem) return;
    let newMessage = document.createElement('div')
    newMessage.append(message)
    elem.append(newMessage)
    }

    async function subscribe(){
        let response = await fetch(url)

        if (response.status == 502){
            await subscribe()
        } else if (response.status !=200){
            showMessage(response.statusText)

            await new Promise((resolve,reject)=>setTimeout(resolve,1000))
            await subscribe()
        } else {

            let message = await response.text()
            showMessage(message)
            await subscribe()
        }


    }
}