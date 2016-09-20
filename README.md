# Patio

Patio is a Javascript library to manage screen context. It handles what should appear on screen surrounding your main container.

You can try an online example here https://msa-argentina.github.io/patio/example/

## License
Patio is distributed under the LGPLv3 License

## Requirements
* jQuery (soon to be removed as requirement.)
* Handlebars (optional but used on most of our projects.)

## how to use it

```javascript
// you define your tiles
var tiles = [
    {
        "id": "loading",
        "template": "loading"
    },
    {
        "id": "slide_1",
        "template": "first_slide"
    },
    {
        "id": "slide_2",
        "template": "second_slide",
        "context_tiles": ["ok", "cancel"]
    }
];
// and your context tiles
var context = [
    {
        "id": "ok",
        "template": "confirm_button",
        "container": "#options",
        "callback_click": click_button
    },
    {
        "id": "cancel",
        "template": "cancel_button",
        "container": "#options",
        "callback_click": click_button
    }
];

function get_template(template_name, template_dir){
    // you should implement your "template fetching function" which shoud return a function that renders the template (we use Handlebars)
}

var patio = new Patio($("#containter"), tiles, context, "templates_dir");

patio.loading.only(); // Will show just the loading screen
patio.slide_1.only(); // Will show the slide_1 along it's content
patio.slide_2.only(); // Will show the slide_2 along it's content

````
