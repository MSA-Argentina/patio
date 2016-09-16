var patio = null;

function click_whatever(event){
    patio.confirmation.only();
}

function click_go_on(event){
    patio.panel_1.only();
}

function click_restart(event){
    patio.intro.only();
}

function click_tab(event){
    var panel = "panel_" + event.dataset.panel;
    patio[panel].only();
}

function get_template(name, dir_){
    /*
     * Devuelve un template para el flavor actual.
     */
    var url =  dir_ + "/" + name + ".html";
    $.ajax(url,
           {
                async: false,
                dataType: "html",
                success: function(data, textStatus, jqXHR) {
                    template = jqXHR.responseText;
                },
                error: function(data, textStatus, jqXHR){
                    console.error(url + " : " + data.statusText);
                }
            });
    var template = Handlebars.compile(template);
    return template;
}

function load_patio(){
    patio = new Patio($("#tiles"), tiles, context, "templates");
    patio.intro.only();
}

$(document).ready(load_patio);
