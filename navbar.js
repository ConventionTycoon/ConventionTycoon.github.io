var html = 
      '<ul class="nav">\
      <li class="nav"><a href="index.html">Home</a></li>\
      <li class="nav"><a href="gallery.html">Gallery</a></li>\
      <li class="nav"><a href="featured_content.html">Featured collaborators</a></li>\
      <li class="nav"><a href="music.html">Musicians wanted!</a></li>\
      <li class="nav"><a href="technicalsupport.html">Technical Support</a></li>\
      <li class="nav"><a href="contact.html">Feedback & Contact</a></li>\
      </ul>';

function makeNavBar() {
  document.getElementById('navbarjs').innerHTML = html;
}