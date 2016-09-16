var tiles = [
    {
        "id": "intro",
        "template": "intro",
        "context_tiles": ["title", "whatever"]
    },
    {
        "id": "confirmation",
        "template": "confirmation",
        "context_tiles": ["title", "go_on", "restart"]
    },
    {
        "id": "panel_1",
        "template": "panel_1",
        "context_tiles": ["tabs", "warning"]
    },
    {
        "id": "panel_2",
        "template": "panel_2",
        "context_tiles": ["tabs", "warning"]
    },
    {
        "id": "panel_3",
        "template": "panel_3",
        "context_tiles": ["tabs", "restart", "warning"]
    }

];
// and your context tiles
var context = [
    {
        "id": "title",
        "container": "#title_container",
        "template": "title"
    },
    {
        "id": "warning",
        "container": "#warning_text",
        "template": "warning"
    },
    {
        "id": "whatever",
        "template": "whatever",
        "container": "#down",
        "button_filter": ".button",
        "callback_click": click_whatever
    },
    {
        "id": "restart",
        "template": "restart",
        "container": "#down",
        "button_filter": ".button3",
        "callback_click": click_restart
    },
    {
        "id": "go_on",
        "template": "go_on",
        "container": "#down",
        "button_filter": ".button2",
        "callback_click": click_go_on
    },
    {
        "id": "tabs",
        "template": "tabs",
        "container": "#top",
        "button_filter": ".tab",
        "callback_click": click_tab
    }
];
