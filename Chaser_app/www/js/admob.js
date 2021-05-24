var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/8691691433'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
    // AdMob.createBanner( {
    //     adId: admobid.banner, 
    //     isTesting: true,
    // } );
    // AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow:false,
        isTesting: true,
    });

    var clientIDs = {
        "PayPalEnvironmentProduction": "YOUR_PRODUCTION_KEY", // not needed while testing
        "PayPalEnvironmentSandbox": "Ae3IHBOoRz44mIEuahijkFDRtNTSk9sWyVKR4aSLkStKyi9b0a7xoy8d-oJ14z3urCSdNy6u8QDjwlgd"
    };

    function onPayPalMobileInit() {
        PayPalMobile.prepareToRender(
            "PayPalEnvironmentSandbox", // or "PayPalEnvironmentProduction" 
            new PayPalConfiguration({
                merchantName: "ThumbHero",
                acceptCreditCards: true,
                merchantPrivacyPolicyURL: "",
                merchantUserAgreementURL: ""
            }),
            function() {
                console.log("OK, ready to accept payments!")
            });
    }
    PayPalMobile.init(clientIDs, onPayPalMobileInit);
}