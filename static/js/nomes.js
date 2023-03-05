function mostrar_idade(id){
    $.get('https://api.agify.io/?name='+id, function(data, status){
        const input = document.querySelector('input[id = ' + id + ']');
        if (data['age'] === null){
            input.value = 'Não encontrado'
        } else {
            input.value = data['age']
        }
        console.log('Input: '+input+', Idade: '+data['age'])
    })
}