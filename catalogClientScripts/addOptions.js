//This is for adding options dynamically to a Select Box
function addOptions(optionsArr, field){ //Options will be an array of options to add to the field. field will the variable name of the select box to add the options to
    g_form.clearOptions(field); //Clear any existing options.
    g_form.addOption(field, '', '--None--'); //OPTIONAL: Only include this line if you wish to have an option for none. Note that if the field is mandatory, this will not count as a valid option for the user.
    for (var i = 0; i < choices.length; i++) {
        var value = choices[i]; //Raw Value of option
        var label = choices[i]; //Text that is displayed to the user in the select box on the form.
        g_form.addOption(field, value, label);
    }

}