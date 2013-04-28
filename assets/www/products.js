/*
 * JS for products generated by Appery.io
 *
 * Created on: Sunday, April 28, 2013, 08:50:46 AM (PDT)
 */

/* Setting project environment indicator */
Appery.env = "apk";

Appery.getProjectGUID = function() {
    return '718cfd69-900a-4443-a5ae-209e0828fa3c';
}

Appery.getTargetPlatform = function() {
    return 'A';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

/*
 * Services
 */
var activityProducts = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/productses/activity/',
    'dataType': 'json',
    'type': 'get',
});
var allSectors = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/sectors/all',
    'dataType': 'json',
    'type': 'get',
});
var createAccount = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/appusers/createAccount',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});
var companies = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/companys/search',
    'dataType': 'json',
    'type': 'get',
});
var company = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/companys/find/',
    'dataType': 'json',
    'type': 'get',
});
var sectorBranches = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/activitybranches/sector/',
    'dataType': 'json',
    'type': 'get',
});
var userFavorites = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/appusers/userFovorites',
    'dataType': 'json',
    'type': 'get',
});
var SubscribedCompanyNum = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/companys/num',
    'dataType': 'json',
    'type': 'get',
});
var authenticate = new Appery.RestService({
    'url': 'http://192.168.1.6:8080/tun-industry/appusers/authentication',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

//createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "branches",
    "location": "branches.html"
}, {
    "name": "products",
    "location": "products.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

j_18_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'customcomponent_13': 'j_21',
        'customcomponent_13_navigation': 'j_22',
        'customcomponent_13_browse': 'j_23',
        'customcomponent_13_search': 'j_24',
        'customcomponent_13_favorites': 'j_25',
        'productsListLabel': 'j_27',
        'spacer_3': 'j_28',
        'productsList': 'j_29',
        'product': 'j_30',
        'mobilelistitembutton_6': 'j_31',
        'productName': 'j_33',
        'productId': 'j_32'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_18';

    /*
     * Nonvisual components
     */
    var datasources = [];

    activityProductsService = new Appery.DataSource(activityProducts, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_18");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'product',
            'SET': [{
                'PATH': ['id'],
                'ID': 'productId',
                'ATTR': '@'
            }, {
                'PATH': ['productsName'],
                'ID': 'productName',
                'ATTR': '@'
            }]
        }],
        'requestMapping': [{
            'PATH': ['id'],
            'ID': '___local_storage___',
            'ATTR': 'branchId',
            'TRANSFORMATION': function(value) {
                return value || 0;
            }
        }]
    });

    datasources.push(activityProductsService);

    /*
     * Events and handlers
     */
    j_18_beforeshow = function() {
        Appery.CurrentScreen = 'j_18';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_5FF6_onLoad = j_18_onLoad = function() {
        screen_5FF6_elementsExtraJS();
        try {
            activityProductsService.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };

        j_18_deviceEvents();
        j_18_windowEvents();
        screen_5FF6_elementsEvents();
    }

    // screen window events
    screen_5FF6_windowEvents = j_18_windowEvents = function() {
        $('#j_18').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    j_18_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_5FF6_elementsExtraJS = j_18_elementsExtraJS = function() {
        // screen (screen-5FF6) extra code

        /* mobilelist2 */

        listView = $("#j_29");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#j_29 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* product */

    }

    // screen elements handler
    screen_5FF6_elementsEvents = j_18_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#j_20 [name="customcomponent_13_browse"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.location = 'startScreen.html';

                }
            },
        });

        $('#j_26 [name="productsList"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setVar_('productId', 'j_32', 'text', '', this);
                    Appery.navigateTo('branches', {
                        transition: 'flip',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#j_18").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_18_beforeshow();
    });

    if (runBeforeShow) {
        j_18_beforeshow();
    } else {
        j_18_onLoad();
    }

}

$("#j_18").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_18_js();
});