function generateJSON(){
    const FORM = document.getElementById("myFormulary");

    if(FORM.checkValidity()){
        //Get the value camps
        const NAME = FORM.elements.name.value;
        const EMAIL = FORM.elements.email.value;
        const AGE = parseInt(FORM.elements.age.value);

        //Create object by the values 
        const DATAS = {
            name: NAME,
            email: EMAIL,
            age: AGE
        };

        //Convert to JSON
        const GENERATED_JSON = JSON.stringify(DATAS, null, 2);

        //To show JSON
        let title = document.createElement("h2")
        title.textContent = 'JSON GENERATED'

        let json = document.createElement('div')
        json.textContent = GENERATED_JSON

        let content = document.getElementById("generatedJSON")
        content.appendChild(title)
        content.appendChild(json)

    } else {
        document.getElementById("generatedJSON").textContent = "Preencha todos os campos obrigatorios"
    }
}