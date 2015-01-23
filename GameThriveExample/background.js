function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

GameThrive.init({appId: "5eb5a37e-b458-11e3-ac11-000c2940e62c",
                 googleProjectNumber: "703322744261"});