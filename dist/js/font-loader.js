(function (window, undefined) {
    var document = window.document,
      fontloader = document.createElement('link');
    fontloader.href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700';
    fontloader.rel='stylesheet';
    window.document.querySelector('head').appendChild(fontloader);
}(this))