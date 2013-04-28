/*
 * JS for startScreen generated by Appery.io
 *
 * Created on: Saturday, April 27, 2013, 10:08:51 AM (PDT)
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
    'url': 'http://192.168.1.5:8080/tun-industry/productses/activity/',
    'dataType': 'json',
    'type': 'get',
});
var allSectors = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/sectors/all',
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
    'url': 'http://192.168.1.5:8080/tun-industry/companys/search',
    'dataType': 'json',
    'type': 'get',
});
var company = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/companys/find/',
    'dataType': 'json',
    'type': 'get',
});
var sectorBranches = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/activitybranches/sector/',
    'dataType': 'json',
    'type': 'get',
});
var userFavorites = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/appusers/userFovorites',
    'dataType': 'json',
    'type': 'get',
});
var SubscribedCompanyNum = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/companys/num',
    'dataType': 'json',
    'type': 'get',
});
var authenticate = new Appery.RestService({
    'url': 'http://192.168.1.5:8080/tun-industry/appusers/authtication',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

//createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "createAccount",
    "location": "createAccount.html"
}, {
    "name": "login",
    "location": "login.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

j_35_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'navigation': 'j_38',
        'search': 'j_39',
        'favoritesNav': 'j_40',
        'profile': 'j_41',
        'subscribedCompany': 'j_43',
        'spacer_73': 'j_46',
        'sector': 'j_44',
        'mobileselectmenuitem_72': 'j_45',
        'sectorActivities': 'j_47',
        'mobileselectmenuitem_75': 'j_48',
        'activityProducts': 'j_49',
        'mobileselectmenuitem_77': 'j_50',
        'panel_78': 'j_51',
        'denomination': 'j_52',
        'governerate': 'j_53',
        'mobileselectmenuitem_81': 'j_54',
        'ppe': 'j_55',
        'mobileselectmenuitem_83': 'j_56',
        'searchButton': 'j_57'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_35';

    /*
     * Nonvisual components
     */
    var datasources = [];

    allSectorsService = new Appery.DataSource(allSectors, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_35");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'sector-0',
            'SET': [{
                'PATH': ['id'],
                'ID': 'sector-0',
                'ATTR': 'value'
            }, {
                'PATH': ['sectorName'],
                'ID': 'sector-0',
                'ATTR': '@'
            }]
        }],
        'requestMapping': []
    });

    datasources.push(allSectorsService);

    SubscribedCompanyNumService = new Appery.DataSource(SubscribedCompanyNum, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_35");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['num'],
            'ID': 'subscribedCompany',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return "Entreprises enregistrées: " + value;
            }
        }],
        'requestMapping': []
    });

    datasources.push(SubscribedCompanyNumService);

    sectorBranchesService = new Appery.DataSource(sectorBranches, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_35");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'sectorActivities-0',
            'SET': [{
                'PATH': ['activityName'],
                'ID': 'sectorActivities-0',
                'ATTR': '@'
            }, {
                'PATH': ['id'],
                'ID': 'sectorActivities-0',
                'ATTR': 'value'
            }]
        }],
        'requestMapping': [{
            'PATH': ['id'],
            'ID': 'sector',
            'ATTR': 'value'
        }]
    });

    datasources.push(sectorBranchesService);

    activityProductsService = new Appery.DataSource(activityProducts, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_35");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'activityProducts-0',
            'SET': [{
                'PATH': ['id'],
                'ID': 'activityProducts-0',
                'ATTR': 'value'
            }, {
                'PATH': ['productsName'],
                'ID': 'activityProducts-0',
                'ATTR': '@'
            }]
        }],
        'requestMapping': [{
            'PATH': ['id'],
            'ID': 'sectorActivities',
            'ATTR': 'value'
        }]
    });

    datasources.push(activityProductsService);

    /*
     * Events and handlers
     */
    j_35_beforeshow = function() {
        Appery.CurrentScreen = 'j_35';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3671_onLoad = j_35_onLoad = function() {
        screen_3671_elementsExtraJS();
        try {
            SubscribedCompanyNumService.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        try {
            allSectorsService.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        localStorage.setItem('userId', '');

        j_35_deviceEvents();
        j_35_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = j_35_windowEvents = function() {
        $('#j_35').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    j_35_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = j_35_elementsExtraJS = function() {
        // screen (screen-3671) extra code

        /* sector */

        $("#j_44").parent().find("a.ui-btn").attr("tabindex", "1");

        /* sectorActivities */

        $("#j_47").parent().find("a.ui-btn").attr("tabindex", "2");

        /* activityProducts */

        $("#j_49").parent().find("a.ui-btn").attr("tabindex", "3");

        /* governerate */

        $("#j_53").parent().find("a.ui-btn").attr("tabindex", "5");

        /* ppe */

        $("#j_55").parent().find("a.ui-btn").attr("tabindex", "6");

    }

    // screen elements handler
    screen_3671_elementsEvents = j_35_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#j_37 [name="search"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.location = 'startScreen.html';

                }
            },
        });

        $('#j_42 [name="sector"]').die().live({
            change: function() {
                try {
                    sectorBranchesService.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            },
        });

        $('#j_42 [name="sectorActivities"]').die().live({
            change: function() {
                try {
                    activityProductsService.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            },
        });

        $('#j_42 [name="searchButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setVar_('sector', 'j_44', 'value', '', this);
                    setVar_('branch', 'j_47', 'value', '', this);
                    setVar_('products', 'j_49', 'value', '', this);
                    setVar_('denomination', 'j_52', 'text', '', this);
                    setVar_('governerate', 'j_53', 'value', '', this);
                    setVar_('ppe', 'j_55', 'value', '', this);

                }
            },
        });

    }

    $("#j_35").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_35_beforeshow();
    });

    if (runBeforeShow) {
        j_35_beforeshow();
    } else {
        j_35_onLoad();
    }

}

$("#j_35").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_35_js();
});