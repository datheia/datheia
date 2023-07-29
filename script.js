toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  

window.onload = function() {

    VANTA.WAVES({
      el: "#vanta-animation",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x23a59,
      shininess: 43.00,
      waveHeight: 9.50,
      waveSpeed: 2.00,
      zoom: 0.65
    });
}


fetch('about.md')
    // Reads the 'about.md' file and gets its text content
    .then(response => response.text())
    .then(text => {
        // convert Markdown to HTML format
        let converter = new showdown.Converter();
        let html = converter.makeHtml(text);

        // insert the HTML into #portfolio-description
        document.getElementById('portfolio-description').innerHTML = html;
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
          toastr.success("Copied!", "Success");
        }, function(err) {
          console.warn('Copy was unsuccessful', err);
        });
      }
      
      
        
